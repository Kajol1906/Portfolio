import { useEffect, useRef } from 'react';

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    // Grid configuration
    const spacing = 45; 
    let cols = 0;
    let rows = 0;
    let nodes: Node[] = [];

    // Interaction state
    let mouse = { x: -1000, y: -1000, radius: 200 };
    let ripples: Ripple[] = [];

    class Node {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      vx: number = 0;
      vy: number = 0;

      constructor(x: number, y: number) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
      }

      update() {
        // Distance to mouse
        const dx = mouse.x - this.baseX;
        const dy = mouse.y - this.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let targetX = this.baseX;
        let targetY = this.baseY;

        // Warp effect (attract to mouse if within radius)
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          targetX += (dx * force * 0.4);
          targetY += (dy * force * 0.4);
        }

        // Ripple effect
        for (let i = 0; i < ripples.length; i++) {
          const r = ripples[i];
          const rdx = this.baseX - r.x;
          const rdy = this.baseY - r.y;
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
          
          const waveDist = Math.abs(rdist - r.radius);
          if (waveDist < r.thickness) {
            const force = (r.thickness - waveDist) / r.thickness * r.force;
            if (rdist > 0) {
              targetX += (rdx / rdist) * force * 15;
              targetY += (rdy / rdist) * force * 15;
            }
          }
        }

        // Spring physics
        const ax = (targetX - this.x) * 0.15; // stiffness
        const ay = (targetY - this.y) * 0.15;
        
        this.vx += ax;
        this.vy += ay;
        
        // damping
        this.vx *= 0.65;
        this.vy *= 0.65;
        
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    class Ripple {
      x: number;
      y: number;
      radius: number = 0;
      maxRadius: number = 600;
      thickness: number = 60;
      force: number = 1.2;
      speed: number = 12;
      dead: boolean = false;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
      }

      update() {
        this.radius += this.speed;
        this.force *= 0.96; // fade out
        if (this.radius > this.maxRadius || this.force < 0.01) {
          this.dead = true;
        }
      }
    }

    const initGrid = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      cols = Math.floor(width / spacing) + 2;
      rows = Math.floor(height / spacing) + 2;
      
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;

      nodes = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          nodes.push(new Node(offsetX + i * spacing, offsetY + j * spacing));
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      ripples.push(new Ripple(e.clientX, e.clientY));
    };

    window.addEventListener('resize', initGrid);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    initGrid();

    const draw = () => {
      // Clear with dark background
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Update nodes
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
      }

      // Update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].update();
        if (ripples[i].dead) ripples.splice(i, 1);
      }

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      
      // Horizontal lines
      ctx.beginPath();
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const node = nodes[i * rows + j];
          if (i === 0) ctx.moveTo(node.x, node.y);
          else ctx.lineTo(node.x, node.y);
        }
      }
      ctx.stroke();

      // Vertical lines
      ctx.beginPath();
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const node = nodes[i * rows + j];
          if (j === 0) ctx.moveTo(node.x, node.y);
          else ctx.lineTo(node.x, node.y);
        }
      }
      ctx.stroke();
      
      // Draw dots
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const dx = mouse.x - node.baseX;
        const dy = mouse.y - node.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        ctx.beginPath();
        if (dist < mouse.radius) {
          const intensity = 1 - (dist / mouse.radius);
          ctx.fillStyle = `rgba(99, 102, 241, ${0.2 + intensity * 0.8})`;
          ctx.arc(node.x, node.y, 1.5 + (intensity * 1), 0, Math.PI * 2);
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', initGrid);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 w-full h-full pointer-events-none"
      />
      {/* Radial Gradient Mask for fading edges */}
      <div 
        className="fixed inset-0 z-[1] w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, #050505 100%)'
        }}
      />
    </>
  );
}
