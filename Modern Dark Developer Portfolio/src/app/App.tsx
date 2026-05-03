import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const skills = [
    {
      name: 'Spring Boot',
      description: 'Java framework for microservices and REST APIs',
      icon: '🍃'
    },
    {
      name: 'Java & Python',
      description: 'Core programming languages with OOP expertise',
      icon: '☕'
    },
    {
      name: 'MySQL & MongoDB',
      description: 'Relational and NoSQL database management',
      icon: '🗄️'
    },
    {
      name: 'AWS Cloud',
      description: 'Cloud computing and deployment services',
      icon: '☁️'
    },
    {
      name: 'Git & GitHub',
      description: 'Version control and collaborative development',
      icon: '🐙'
    },
    {
      name: 'REST API',
      description: 'RESTful web services and API development',
      icon: '🔌'
    },
    {
      name: 'AI/ML Tools',
      description: 'NumPy, Pandas, Scikit-learn for data science',
      icon: '🤖'
    },
    {
      name: 'Kafka & Redis',
      description: 'Event streaming and in-memory data structures',
      icon: '⚡'
    }
  ];

  const projects = [
    {
      name: 'Restaurant Billing System',
      description: 'Built a Spring Boot billing system managing orders, tables, and payments for 100+ daily transactions. Developed REST APIs for billing and order tracking, reducing manual operations by 60%. Implemented JWT authentication and Hibernate ORM for secure data persistence. Integrated WebSocket for real-time kitchen and billing updates with <1s latency.',
      technologies: ['Spring Boot', 'MySQL', 'REST API', 'WebSocket', 'JWT', 'Hibernate'],
      link: 'https://github.com/Kajol1906'
    },
    {
      name: 'Axion – EV Fleet Telemetry & OTA Platform',
      description: 'Built a real-time EV telemetry platform processing 1,000+ events/min using Kafka event streaming. Developed a Redis-backed digital twin engine maintaining live state for 100+ vehicles. Implemented a rule-based vehicle health scoring system (0–100) using battery and temperature metrics. Simulated OTA updates with canary rollouts and failure-handling workflows.',
      technologies: ['Python', 'Spring Boot', 'Kafka', 'Redis', 'Real-time Systems'],
      link: 'https://github.com/Kajol1906'
    },
    {
      name: 'JSON Parser',
      description: 'Developed a Java JSON parser supporting datasets with 10,000+ nested nodes. Implemented schema validation and a query engine with full JUnit test coverage. Optimized tree traversal and indexing to improve parsing performance by 45%.',
      technologies: ['Java', 'JUnit', 'Schema Validation', 'Query Engine'],
      link: 'https://github.com/Kajol1906'
    }
  ];

  const marqueeText = [
    'Full Stack Developer focused on Spring Boot, Java, Python, and scalable backend systems.',
    'Real-time systems, REST APIs, database design, and cloud-ready architecture.',
  ];

  const timeline = [
    {
      year: '2024',
      title: 'EV Fleet Telemetry & OTA',
      desc: 'Designed a Kafka-backed real-time pipeline and Redis digital twin for 100+ vehicles, including OTA canary rollouts.'
    },
    {
      year: '2023',
      title: 'Restaurant Billing System',
      desc: 'Built Spring Boot billing APIs, WebSocket live updates, JWT auth and Hibernate persistence for high-throughput usage.'
    },
    {
      year: '2022',
      title: 'Open-source JSON Parser',
      desc: 'Implemented a performant Java parser with schema validation and a query engine used in large nested datasets.'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B1120' }}>
      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen px-6 py-6 flex flex-col justify-between w-full">
        <div className="flex flex-1 items-center justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl px-8 md:px-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-6xl" style={{ color: '#2DD4BF' }}>Hello</h1>
              <h2 className="text-5xl" style={{ color: '#E2E8F0' }}>I'm Kajol Gehlot</h2>
              <div className="flex items-center gap-2 text-3xl" style={{ color: '#E2E8F0' }}>
                <span>I'm a</span>
                <span style={{ color: '#2DD4BF' }}>{'{ Full Stack Developer }'}</span>
              </div>
            </div>

            <p className="text-lg leading-relaxed" style={{ color: '#94A3B8' }}>
              A passionate full-stack developer specializing in building scalable web applications
              using Spring Boot, Java, and modern cloud technologies. I turn complex problems into
              elegant solutions through clean code and innovative thinking.
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/Kajol1906" target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full border transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#2DD4BF' }}>
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/kajol-gehlot-8352b12b8" target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full border transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#2DD4BF' }}>
                <Linkedin size={24} />
              </a>
              <a href="mailto:kajolgehlot980@gmail.com" className="p-3 rounded-full border transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#2DD4BF' }}>
                <Mail size={24} />
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                className="px-8 py-3 rounded-xl transition-all hover:shadow-xl"
                style={{
                  backgroundColor: '#2DD4BF',
                  color: '#0B1120',
                  boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)'
                }}
              >
                Contact
              </button>
              <button
                className="px-8 py-3 rounded-xl border-2 transition-all hover:bg-opacity-10"
                style={{
                  borderColor: '#2DD4BF',
                  color: '#2DD4BF',
                  backgroundColor: 'transparent'
                }}
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Code Window */}
          <div className="rounded-2xl border overflow-hidden"
               style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: '#0F1729' }}>
            <div className="px-4 py-3 border-b flex items-center gap-2"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: '#1A2332' }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FEBC2E' }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28C840' }}></div>
              </div>
              <div className="ml-4 px-4 py-1 rounded-t-lg"
                   style={{ backgroundColor: '#2DD4BF', color: '#0B1120' }}>
                master.py
              </div>
            </div>
            <div className="p-6 font-mono text-sm" style={{ color: '#94A3B8' }}>
              <pre>
                <code>
{`developer = {
  "name": "Kajol Gehlot",
  "role": "Full Stack Developer",
  "education": "B.Tech CSE @ Parul University",
  "cgpa": 7.53,
  "skills": [
    "Spring Boot",
    "Java & Python",
    "REST APIs",
    "Microservices",
    "MySQL & MongoDB",
    "AWS Cloud"
  ],
  "achievements": "500+ DSA problems solved",
  "availability": "Open to opportunities"
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
        </div>
        <div className="pt-4 pb-2">
          <div className="max-w-7xl mx-auto rounded-2xl border overflow-hidden"
               style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: '#0F1729' }}>
            <div className="marquee-row" style={{ padding: '1rem 0' }}>
              <div className="marquee-track marquee-left">
                <span className="marquee-item">{marqueeText[0]}</span>
                <span className="marquee-item" aria-hidden="true">{marqueeText[1]}</span>
                <span className="marquee-item" aria-hidden="true">{marqueeText[0]}</span>
                <span className="marquee-item" aria-hidden="true">{marqueeText[1]}</span>
                <span className="marquee-item" aria-hidden="true">{marqueeText[0]}</span>
                <span className="marquee-item" aria-hidden="true">{marqueeText[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Timeline Section */}
      <section className="px-6 pt-4 pb-8 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Intro + Highlights */}
          <div className="relative overflow-hidden rounded-2xl border px-8 py-10"
               style={{ borderColor: 'rgba(255,255,255,0.06)', backgroundColor: '#0F1729' }}>
            <div className="inline-flex rounded-full border px-4 py-1 text-sm tracking-[0.2em] uppercase"
                 style={{ borderColor: 'rgba(45, 212, 191, 0.25)', color: '#2DD4BF' }}>
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl mt-4" style={{ color: '#E2E8F0' }}>
              Strategic systems, measurable impact.
            </h2>

            <p className="mt-4 text-lg text-muted-foreground" style={{ color: '#94A3B8' }}>
              I build backend-first applications that scale and delight users. My work blends pragmatic
              engineering with product thinking — from designing streaming pipelines to building
              user-friendly administration tools. I focus on measurable outcomes: reliability, performance,
              and maintainability.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="/src/imports/Kajol_Resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 rounded-xl border transition-all hover:scale-105"
                 style={{ borderColor: '#2DD4BF', color: '#2DD4BF' }}>
                View Resume
              </a>
              <a href="#contact" className="px-6 py-3 rounded-xl bg-[#2DD4BF] text-[#0B1120] transition-all hover:shadow-xl"
                 style={{ boxShadow: '0 6px 20px rgba(45,212,191,0.12)' }}>
                Let's Talk
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="highlight-card p-4 rounded-2xl border">
                <div className="text-lg font-semibold" style={{ color: '#E2E8F0' }}>Product-led Engineering</div>
                <div className="mt-2 text-sm" style={{ color: '#94A3B8' }}>Ship minimal, iterate with metrics.</div>
              </div>
              <div className="highlight-card p-4 rounded-2xl border">
                <div className="text-lg font-semibold" style={{ color: '#E2E8F0' }}>Realtime & Resilient</div>
                <div className="mt-2 text-sm" style={{ color: '#94A3B8' }}>Event-driven design for reliability at scale.</div>
              </div>
              <div className="highlight-card p-4 rounded-2xl border">
                <div className="text-lg font-semibold" style={{ color: '#E2E8F0' }}>Observability</div>
                <div className="mt-2 text-sm" style={{ color: '#94A3B8' }}>Metrics, tracing, and actionable alerts.</div>
              </div>
              <div className="highlight-card p-4 rounded-2xl border">
                <div className="text-lg font-semibold" style={{ color: '#E2E8F0' }}>Security-first</div>
                <div className="mt-2 text-sm" style={{ color: '#94A3B8' }}>Secure defaults and defensive coding.</div>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            <div className="rounded-2xl border p-6" style={{ borderColor: 'rgba(255,255,255,0.06)', backgroundColor: '#0F1729' }}>
              <div className="relative pl-8">
                <div className="timeline-line absolute left-6 top-6 bottom-6" />
                <div className="space-y-8">
                  {timeline.map((t, i) => (
                    <div key={i} className="timeline-item relative flex items-start gap-4">
                      <div className="timeline-badge flex-shrink-0">{t.year}</div>
                      <div>
                        <h4 className="text-lg font-semibold" style={{ color: '#E2E8F0' }}>{t.title}</h4>
                        <p className="mt-1 text-sm" style={{ color: '#94A3B8' }}>{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen px-6 py-20 mt-20 flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl mb-16" style={{ color: '#E2E8F0' }}>Featured Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border transition-all hover:shadow-xl hover:scale-105"
                style={{
                  borderColor: 'rgba(255,255,255,0.1)',
                  backgroundColor: '#0F1729',
                }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl" style={{ color: '#E2E8F0' }}>{project.name}</h3>
                  <p className="text-base leading-relaxed" style={{ color: '#94A3B8' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: 'rgba(45, 212, 191, 0.1)',
                          color: '#2DD4BF',
                          border: '1px solid rgba(45, 212, 191, 0.3)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit px-4 py-2 rounded-lg border transition-all hover:scale-105"
                    style={{ borderColor: '#2DD4BF', color: '#2DD4BF' }}
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Proficiencies Section */}
      <section className="min-h-screen px-6 py-20 flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl text-center mb-16" style={{ color: '#E2E8F0' }}>
            Skills and Proficiencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border transition-all hover:scale-105 hover:shadow-xl"
                style={{
                  borderColor: 'rgba(255,255,255,0.1)',
                  backgroundColor: '#0F1729',
                }}
              >
                
                <h3 className="text-xl mb-2" style={{ color: '#E2E8F0' }}>{skill.name}</h3>
                <p className="text-sm" style={{ color: '#94A3B8' }}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen px-6 py-20 flex items-center justify-center">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-5xl" style={{ color: '#E2E8F0' }}>Let's Talk</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#2DD4BF' }}>
                  <Mail size={24} style={{ color: '#0B1120' }} />
                </div>
                <div>
                  <div className="text-sm" style={{ color: '#94A3B8' }}>Email</div>
                  <div style={{ color: '#E2E8F0' }}>kajolgehlot980@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#2DD4BF' }}>
                  <Phone size={24} style={{ color: '#0B1120' }} />
                </div>
                <div>
                  <div className="text-sm" style={{ color: '#94A3B8' }}>Phone</div>
                  <div style={{ color: '#E2E8F0' }}>+91 6268055148</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#2DD4BF' }}>
                  <MapPin size={24} style={{ color: '#0B1120' }} />
                </div>
                <div>
                  <div className="text-sm" style={{ color: '#94A3B8' }}>Location</div>
                  <div style={{ color: '#E2E8F0' }}>Vadodara, Gujarat, India</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Kajol1906" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#2DD4BF' }}>
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/kajol-gehlot-8352b12b8" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#2DD4BF' }}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:kajolgehlot980@gmail.com"
                 className="w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#2DD4BF' }}>
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="px-4 py-3 rounded-xl border focus:border-2 outline-none transition-all"
                style={{
                  backgroundColor: '#0F1729',
                  borderColor: 'rgba(255,255,255,0.1)',
                  color: '#E2E8F0'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2DD4BF'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="px-4 py-3 rounded-xl border focus:border-2 outline-none transition-all"
                style={{
                  backgroundColor: '#0F1729',
                  borderColor: 'rgba(255,255,255,0.1)',
                  color: '#E2E8F0'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2DD4BF'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="px-4 py-3 rounded-xl border focus:border-2 outline-none transition-all"
                style={{
                  backgroundColor: '#0F1729',
                  borderColor: 'rgba(255,255,255,0.1)',
                  color: '#E2E8F0'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2DD4BF'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="px-4 py-3 rounded-xl border focus:border-2 outline-none transition-all"
                style={{
                  backgroundColor: '#0F1729',
                  borderColor: 'rgba(255,255,255,0.1)',
                  color: '#E2E8F0'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2DD4BF'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                required
              />
            </div>

            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={6}
              className="w-full px-4 py-3 rounded-xl border focus:border-2 outline-none transition-all resize-none"
              style={{
                backgroundColor: '#0F1729',
                borderColor: 'rgba(255,255,255,0.1)',
                color: '#E2E8F0'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2DD4BF'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              required
            />

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-xl"
              style={{
                backgroundColor: '#2DD4BF',
                color: '#0B1120',
                boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)'
              }}
            >
              Send Us Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div style={{ color: '#94A3B8' }}>
            Design by Kajol Gehlot
          </div>
          <a href="https://github.com/Kajol1906" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 transition-all hover:scale-105"
             style={{ color: '#2DD4BF' }}>
            <Github size={20} />
            <span>github.com/Kajol1906</span>
          </a>
        </div>
      </footer>
    </div>
  );
}