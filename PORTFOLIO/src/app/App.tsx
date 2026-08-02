import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const bronzeStreakBadge = new URL('../imports/CodeChefBadge (1).png', import.meta.url).href;
const codeChefProblemsBadge = new URL('../imports/CodeChefBadge.png', import.meta.url).href;
const leetCodeBadge2025 = new URL('../imports/download (1).png', import.meta.url).href;
const leetCodeBadge2026 = new URL('../imports/download.png', import.meta.url).href;
const javaSkillBadge = new URL('../imports/javacert.png', import.meta.url).href;
const hackerRankJavaCert = new URL('../imports/Screenshot 2026-05-19 183545.png', import.meta.url).href;
const awsAcademyCert = new URL('../imports/AWScert.png', import.meta.url).href;
const aiFundamentalsCert = new URL('../imports/AIFundamental.png', import.meta.url).href;
const springBootCert = new URL('../imports/spring.png', import.meta.url).href;

export default function App() {
  const headingColor = '#E5E7EB';
  const subheadingColor = '#9CA3AF';

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
      name: 'PostgreSQL & MongoDB',
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
      name: 'Brewly - Full-Stack POS & Billing System',
      description: 'Built a café management platform with POS billing, real-time dashboard analytics, menu/inventory management with recipe auto-deduction, and calendar-based event booking. Implemented JWT + Google OAuth 2.0 authentication, data-driven AI insights (revenue forecasting, peak hour analysis, stock depletion prediction), and Excel export functionality. Developed an AI-powered Virtual Assistant using Spring AI Function Calling, enabling users to query live business metrics and receive real-time technical support via natural language chat.',
      technologies: ['Spring Boot', 'PostgreSQL', 'React', 'Spring AI', 'JWT', 'OAuth 2.0'],
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
    },
    {
      name: 'AroundMe',
      description: 'AI-first hyperlocal alert system that uses OpenAI-powered reasoning to correlate, prioritize, and explain city alerts (traffic, weather, events, safety) based on user context. Delivers only the most relevant, deduplicated, and explainable notifications for urban awareness.',
      technologies: ['React', 'Spring Boot', 'Java', 'MongoDB', 'OpenAI GPT-3.5/4', 'REST API', 'Vite', 'CSS Modules'],
      link: 'https://github.com/Kajol1906/Around-me'
    }
  ];

  const marqueeText = [
    'Java',
    'Spring Boot',
    'Python',
    'REST API',
    'MySQL & MongoDB',
    'PostgreSQL',
    'Redis',
    'TypeScript',
    'React'
  ];

  // Repeat the skills enough times to fill the marquee line
  const marqueeSkills = Array(6).fill(marqueeText).flat();

  const timeline = [
    {
      year: '2024',
      title: 'Brewly - POS & Billing System',
      desc: 'Built café management platform with AI-powered analytics, Spring AI Virtual Assistant, and real-time dashboard.'
    },
    {
      year: '2024',
      title: 'EV Fleet Telemetry & OTA',
      desc: 'Designed Kafka-backed real-time pipeline and Redis digital twin for 100+ vehicles with canary rollouts.'
    },
    {
      year: '2022',
      title: 'Open-source JSON Parser',
      desc: 'Implemented performant Java parser with schema validation and query engine for large nested datasets.'
    }
  ];

  const certifications = [
    {
      title: 'Bronze Streak Badge',
      platform: 'CodeChef',
      type: 'Badge',
      note: '5 Days coding streak',
      image: bronzeStreakBadge
    },
    {
      title: '50 Problems on CodeChef',
      platform: 'CodeChef',
      type: 'Badge',
      note: 'Problem Solver Bronze Badge',
      image: codeChefProblemsBadge
    },
    {
      title: '50 Days Badge 2025',
      platform: 'LeetCode',
      type: 'Badge',
      note: 'Solved problems consistently in 2025',
      image: leetCodeBadge2025
    },
    {
      title: '50 Days Badge 2026',
      platform: 'LeetCode',
      type: 'Badge',
      note: 'Solved problems consistently in 2026',
      image: leetCodeBadge2026
    },
    {
      title: 'AWS Academy Graduate',
      platform: 'AWS Academy',
      type: 'Certification',
      note: 'Cloud Foundations',
      image: awsAcademyCert
    },
    {
      title: 'Java (Basic)',
      platform: 'HackerRank',
      type: 'Certification',
      note: 'Certificate of Accomplishment',
      image: hackerRankJavaCert
    },
    {
      title: 'Problem Solving',
      platform: 'HackerRank',
      type: 'Badge',
      note: 'Problem Solving badge',
      image: ''
    },
    {
      title: 'Master Spring Boot 3 & Spring Framework 6 with Java',
      platform: 'Udemy',
      type: 'Certification',
      note: 'Full-stack backend course',
      image: springBootCert
    },
    {
      title: 'AI Fundamentals',
      platform: 'IBM SkillsBuild',
      type: 'Certification',
      note: 'Cisco Networking Academy collaboration',
      image: aiFundamentalsCert
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen px-6 py-6 flex flex-col justify-between w-full">
        <div className="flex flex-1 items-center justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl px-8 md:px-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-6xl" style={{ color: headingColor }}>Hello</h1>
              <h2 className="text-5xl" style={{ color: headingColor }}>I'm Kajol Gehlot</h2>
              <div className="flex items-center gap-2 text-3xl" style={{ color: headingColor }}>
                <span>I'm a</span>
                <span style={{ color: headingColor }}>{'{ Full Stack Developer }'}</span>
              </div>
            </div>

            <p className="text-lg leading-relaxed" style={{ color: subheadingColor }}>
              A passionate full-stack developer specializing in building scalable web applications
              using Spring Boot, Java, and modern cloud technologies. I turn complex problems into
              elegant solutions through clean code and innovative thinking.
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/Kajol1906" target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full border transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: headingColor }}>
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/kajol-gehlot-8352b12b8" target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full border transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: headingColor }}>
                <Linkedin size={24} />
              </a>
              <a href="mailto:kajolgehlot980@gmail.com" className="p-3 rounded-full border transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: headingColor }}>
                <Mail size={24} />
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                className="px-8 py-3 rounded-xl transition-all hover:shadow-xl"
                style={{
                  backgroundColor: headingColor,
                  color: '#F5F4F6',
                   boxShadow: '0 0 20px rgba(229,231,235,0.06)'
                }}
              >
                Contact
              </button>
              <button
                className="px-8 py-3 rounded-xl border-2 transition-all hover:bg-opacity-10"
                style={{
                  borderColor: headingColor,
                  color: headingColor,
                  backgroundColor: 'transparent'
                }}
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Code Window */}
          <div className="rounded-2xl border overflow-hidden"
            style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: '#0B0B0B' }}>
            <div className="px-4 py-3 border-b flex items-center gap-2"
              style={{ borderColor: 'rgba(255,255,255,0.06)', backgroundColor: '#0F0F0F' }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FEBC2E' }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28C840' }}></div>
              </div>
              <div className="ml-4 px-4 py-1 rounded-t-lg"
                   style={{ backgroundColor: headingColor, color: '#000000' }}>
                Developer.java
              </div>
            </div>
            <div className="p-5 font-mono text-xs leading-5" style={{ color: subheadingColor }}>
              <pre className="whitespace-pre-wrap break-words">
                <code>
{`public class Developer {
    private final String name = "Kajol Gehlot";
    private final String role = "Full Stack Developer";
    private final String education = "B.Tech CSE @ Parul University";
    private final double cgpa = 7.53;

    private final String[] skills = {
        "Spring Boot",
        "Java",
        "REST APIs",
        "Microservices",
        "PostgreSQL & MongoDB",
        "AWS Cloud"
    };

    private final String achievements = "700+ DSA problems solved";
    private final String availability = "Open to opportunities";
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
        </div>
        <div className="pt-8 pb-10">
        <div className="max-w-7xl mx-auto rounded-2xl border overflow-hidden"
          style={{ borderColor: 'rgba(255,255,255,0.06)', backgroundColor: '#0B0B0B' }}>
            <div className="marquee-row" style={{ padding: '1rem 0', overflow: 'hidden' }}>
              <div
                className="marquee-track marquee-left"
                  style={{
                          display: 'flex',
                          gap: '2.5rem',
                          fontWeight: 600,
                          fontSize: '1.1rem',
                          letterSpacing: '0.1em',
                          color: headingColor,
                          whiteSpace: 'nowrap',
                          animation: 'marquee 40s linear infinite',
                          textTransform: 'none' // Ensure normal case
                        }}
              >
                {marqueeSkills.map((skill, idx) => (
                  <span className="marquee-item" key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Timeline Section */}
      <section className="px-6 py-20 flex items-center justify-center" style={{ marginTop: '0' }}>
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-6 px-4 items-start">
          {/* Left: About Me Content */}
          <div>
            <div className="mb-2 text-xs font-mono tracking-widest" style={{ color: headingColor }}>// About me</div>
            <h1 className="text-4xl font-bold mb-3" style={{ color: headingColor, fontFamily: 'Georgia, serif' }}>
              I'm a student building systems.
            </h1>
            <h2 className="text-base font-medium mb-4" style={{ color: subheadingColor, maxWidth: '900px' }}>
              I am a B.Tech Computer Science student at Parul University (2023-2027), passionate about backend development, Java, and Spring Boot. I love solving complex problems, have solved 700+ DSA challenges, and enjoy building scalable, reliable systems. Always eager to learn and collaborate on impactful projects.
            </h2>
            <ul className="mb-4 list-disc pl-6 text-sm max-w-3xl" style={{ color: subheadingColor }}>
              <li>Solved 700+ Data Structures and Algorithms (DSA) problems across coding platforms.</li>
              <li>Selected for GSSoC 2026 in Open Source & AI Agent tracks.</li>
              <li>Selected for State Level Regional Round in OpenAI Academy Hackathon.</li>
              <li>Current CGPA: 7.53 at Parul University.</li>
            </ul>
            <p className="text-sm max-w-3xl" style={{ color: subheadingColor }}>
              I'm open to full-time roles, internship opportunities, and <b>freelance projects</b>. Looking to build with teams that value distributed systems, clean architecture, and production-grade quality.
            </p>
          </div>
          {/* Right: Stat/Status Blocks */}
          <div className="flex flex-col gap-4 w-full max-w-xs ml-auto">
            <div className="rounded-xl bg-[#0F0F0F] p-4 flex flex-col items-start">
              <span className="text-2xl font-bold mb-1" style={{ color: headingColor }}>700+</span>
              <span className="text-xs tracking-widest" style={{ color: subheadingColor }}>DSA PROBLEMS SOLVED</span>
            </div>
            <div className="rounded-xl bg-[#0F0F0F] p-4 flex flex-col items-start">
              <span className="text-2xl font-bold mb-1" style={{ color: headingColor }}>6+</span>
              <span className="text-xs tracking-widest" style={{ color: subheadingColor }}>CERTIFICATES & BADGES</span>
            </div>
            <div className="rounded-xl bg-[#0F0F0F] p-4 flex flex-col items-start border border-[#222]">
              <span className="text-xl font-bold mb-1" style={{ color: headingColor }}>Available</span>
              <div className="w-full flex flex-col items-start mt-2">
                <span className="text-xs tracking-widest mb-1" style={{ color: subheadingColor }}>STATUS</span>
                <span className="flex items-center gap-2 text-xs" style={{ color: subheadingColor }}>
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                  Open for full-time, internship, freelance
                </span>
              </div>
            </div>
            <div className="rounded-xl bg-[#0F0F0F] p-4 flex flex-col items-start border border-[#222]">
              <span className="text-xl font-bold mb-1" style={{ color: headingColor }}>Open Source</span>
              <div className="w-full flex flex-col items-start mt-2">
                <span className="text-xs tracking-widest mb-1" style={{ color: subheadingColor }}>CONTRIBUTION</span>
                <span className="flex items-center gap-2 text-xs" style={{ color: subheadingColor }}>
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400"></span>
                  Active contributor & GSSoC 2026 selected
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen px-6 py-20 flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl text-center mb-12" style={{ color: headingColor }}>Projects I've Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch auto-rows-fr">
            {projects.map((project, index) => (
              <div
                key={index}
                className="h-full p-8 rounded-2xl border transition-all hover:shadow-xl hover:scale-105"
                style={{
                  borderColor: 'rgba(255,255,255,0.1)',
                  backgroundColor: '#0B0B0B',
                }}
              >
                <div className="flex h-full flex-col gap-4">
                  <h3 className="text-2xl" style={{ color: headingColor }}>{project.name}</h3>
                  <p className="text-base leading-relaxed" style={{ color: subheadingColor }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          color: headingColor,
                          border: '1px solid rgba(255,255,255,0.06)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit px-4 py-2 rounded-lg border transition-all hover:scale-105"
                      style={{ borderColor: headingColor, color: headingColor }}
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Proficiencies Section */}
      <section className="min-h-screen px-6 py-20 flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl text-center mb-10" style={{ color: headingColor }}>
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
                
                <h3 className="text-xl mb-2" style={{ color: headingColor }}>{skill.name}</h3>
                <p className="text-sm" style={{ color: subheadingColor }}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Badges Section */}
      <section className="px-6 py-12 flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-4xl text-center mb-4" style={{ color: headingColor }}>
            Certifications & Badges
          </h2>
          <p className="text-center mb-8 text-sm" style={{ color: subheadingColor }}>
            Scroll horizontally to explore the certificates and badges.
          </p>

          <div className="overflow-x-auto pb-4" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-6 px-2 snap-x snap-mandatory">
              {certifications.map((item, index) => (
                (() => {
                  const isBadge = item.type === 'Badge';

                  return (
                <article
                  key={index}
                  className="snap-start flex-shrink-0 w-[300px] md:w-[340px] h-[430px] transition-transform hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'transparent'
                  }}
                >
                  <div className="h-full rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-4 flex flex-col">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span
                        className="text-[11px] uppercase tracking-[0.22em] px-3 py-1 rounded-full border"
                        style={{
                          color: headingColor,
                          borderColor: 'rgba(255,255,255,0.08)',
                          backgroundColor: 'rgba(255,255,255,0.03)'
                        }}
                      >
                        {isBadge ? 'Badge' : 'Certificate'}
                      </span>
                      <span className="text-xs" style={{ color: subheadingColor }}>
                        {item.platform}
                      </span>
                    </div>

                    <div className="flex-1 rounded-2xl border border-dashed border-white/10 bg-black/40 p-3 flex flex-col justify-between">
                      <div>
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60">
                          {item.image ? (
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              className="h-56 w-full object-cover"
                            />
                          ) : (
                            <div className="h-56 w-full flex items-center justify-center bg-white/[0.03] text-sm" style={{ color: subheadingColor }}>
                              Add the image file for this HackerRank badge
                            </div>
                          )}
                        </div>
                        <div className="space-y-2 mt-4">
                          <h3 className="text-lg font-semibold leading-tight" style={{ color: headingColor }}>
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed" style={{ color: subheadingColor }}>
                            {item.note}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </article>
                  );
                })()
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen px-6 py-20 flex items-center justify-center">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-5xl" style={{ color: headingColor }}>Let's Talk</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: headingColor }}>
                  <Mail size={24} style={{ color: '#F5F4F6' }} />
                </div>
                <div>
                  <div className="text-sm" style={{ color: subheadingColor }}>Email</div>
                  <div style={{ color: headingColor }}>kajolgehlot980@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: headingColor }}>
                  <Phone size={24} style={{ color: '#F5F4F6' }} />
                </div>
                <div>
                  <div className="text-sm" style={{ color: subheadingColor }}>Phone</div>
                  <div style={{ color: headingColor }}>+91 6268055148</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: headingColor }}>
                  <MapPin size={24} style={{ color: '#F5F4F6' }} />
                </div>
                <div>
                  <div className="text-sm" style={{ color: subheadingColor }}>Location</div>
                  <div style={{ color: headingColor }}>Vadodara, Gujarat, India</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Kajol1906" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: headingColor }}>
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/kajol-gehlot-8352b12b8" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: headingColor }}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:kajolgehlot980@gmail.com"
                 className="w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:scale-110"
                 style={{ borderColor: 'rgba(255,255,255,0.1)', color: headingColor }}>
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
                  backgroundColor: '#0B0B0B',
                  borderColor: 'rgba(255,255,255,0.1)',
                  color: headingColor
                }}
                onFocus={(e) => e.target.style.borderColor = headingColor}
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
                  color: headingColor
                }}
                onFocus={(e) => e.target.style.borderColor = headingColor}
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
                  color: headingColor
                }}
                onFocus={(e) => e.target.style.borderColor = headingColor}
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
                  color: headingColor
                }}
                onFocus={(e) => e.target.style.borderColor = headingColor}
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
                  backgroundColor: '#0B0B0B',
                  borderColor: 'rgba(255,255,255,0.1)',
                  color: subheadingColor
                }}
                onFocus={(e) => e.target.style.borderColor = headingColor}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              required
            />

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-xl"
              style={{
                backgroundColor: headingColor,
                color: '#F5F4F6',
                 boxShadow: '0 0 20px rgba(229,231,235,0.06)'
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
          <div style={{ color: subheadingColor }}>
            Design by Kajol Gehlot
          </div>
          <a href="https://github.com/Kajol1906" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 transition-all hover:scale-105"
             style={{ color: headingColor }}>
            <Github size={20} />
            <span>github.com/Kajol1906</span>
          </a>
        </div>
      </footer>
    </div>
  );
}