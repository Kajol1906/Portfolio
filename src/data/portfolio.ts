export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  link: string;
  liveLink?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: string;
  level: number; // 0 to 100
  iconName?: string;
}

export interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  platform: string;
  type: 'Badge' | 'Certification';
  note: string;
  image: string;
}

export const portfolioData = {
  personal: {
    name: "Kajol Gehlot",
    role: "Full Stack Developer",
    email: "kajolgehlot19@gmail.com",
    phone: "+91 6268055148",
    location: "Vadodara, Gujarat, India",
    github: "https://github.com/Kajol1906",
    linkedin: "https://linkedin.com/in/kajol-gehlot-8352b12b8",
    bio: "I am a B.Tech Computer Science student at Parul University (2023-2027), passionate about backend development, Java, and Spring Boot. I love solving complex problems, have solved 700+ DSA challenges, and enjoy building scalable, reliable systems.",
    education: {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      university: "Parul University",
      period: "2023 - 2027",
      cgpa: "7.63",
    }
  },
  projects: [
    {
      id: "brewly",
      title: "Brewly - Full-Stack POS & Billing System",
      shortDescription: "A café management platform with POS billing, real-time analytics, and AI-powered insights.",
      description: "Developed a café management platform with POS billing, dashboard analytics, inventory management, and event booking features. Implemented JWT + Google OAuth 2.0 authentication, data-driven AI insights (revenue forecasting, peak hour analysis, stock depletion prediction), and Excel export functionality. Built an AI-powered assistant using Spring AI Function Calling for live business insights and technical support.",
      technologies: ["Spring Boot", "PostgreSQL", "React", "Spring AI", "JWT", "OAuth 2.0"],
      link: "https://github.com/Kajol1906",
      featured: true
    },
    {
      id: "logflow",
      title: "LogFlow - Event-driven Log Pipeline",
      shortDescription: "An event-driven log ingestion pipeline using Python and Kafka with real-time AI alerting.",
      description: "Built an event-driven log ingestion pipeline using Python and Kafka to stream microservice logs into MongoDB. Engineered a real-time Alert Engine that automatically detects error spikes and uses LLaMA 3.1 to generate instant root cause analyses. Developed an adjustable, full-stack React dashboard with WebSockets to broadcast live AI alerts and visualize log metrics.",
      technologies: ["Spring Boot", "React", "Kafka", "MongoDB", "Groq AI", "Python", "WebSockets"],
      link: "https://github.com/Kajol1906",
      featured: true
    },
    {
      id: "json-parser",
      title: "JSON Parser",
      shortDescription: "High-performance Java JSON parser with schema validation and AST-backed query engine.",
      description: "Optimized parsing throughput via a zero-allocation Lexer utilizing char[] buffers, validated by JMH benchmarks. Architected an AST-backed JSONPath query engine executing complex filters and recursive DFS traversals. Built a dynamic POJO mapper leveraging the Java Reflection API and custom runtime annotations for object serialization.",
      technologies: ["Java", "JUnit", "JMH Benchmarks", "AST", "Reflection API"],
      link: "https://github.com/Kajol1906"
    }
  ] as Project[],
  skills: [
    { name: "Java", category: "Languages", level: 90 },
    { name: "Python", category: "Languages", level: 85 },
    { name: "JavaScript", category: "Languages", level: 80 },
    { name: "SQL", category: "Languages", level: 85 },
    
    { name: "Spring Boot", category: "Frameworks & Libraries", level: 90 },
    { name: "React", category: "Frameworks & Libraries", level: 85 },
    { name: "Spring Security", category: "Frameworks & Libraries", level: 80 },
    { name: "Hibernate/JPA", category: "Frameworks & Libraries", level: 85 },
    
    { name: "PostgreSQL", category: "Databases & Infra", level: 85 },
    { name: "MongoDB", category: "Databases & Infra", level: 80 },
    { name: "Kafka", category: "Databases & Infra", level: 75 },
    { name: "Redis", category: "Databases & Infra", level: 75 },
    
    { name: "Git/GitHub", category: "Tools & Platforms", level: 90 },
    { name: "AWS", category: "Tools & Platforms", level: 70 },
    { name: "Postman", category: "Tools & Platforms", level: 90 },
    
    { name: "DSA", category: "Core Concepts", level: 95 },
    { name: "REST APIs", category: "Core Concepts", level: 90 },
    { name: "Microservices", category: "Core Concepts", level: 80 }
  ] as Skill[],
  experience: [
    {
      id: "gssoc-2026",
      year: "2026",
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      description: "Contributed to multiple complex open source initiatives focused on privacy, real-time collaboration, and customer service systems.",
      achievements: [
        "Implemented a multimodal privacy masking engine with geometric masking, blur regions, and regex-based sensitive data redaction for real-time privacy protection.",
        "Developed a collaborative wardrobe-sharing feature enabling users to share shopping carts through encoded URLs with preview, merge, and overwrite functionality.",
        "Built a real-time customer service request layer using WebSockets, REST APIs, and admin notification systems for live request tracking and management."
      ]
    }
  ] as ExperienceItem[],
  certifications: [
    {
      id: "aws-academy",
      title: "AWS Academy Graduate",
      platform: "AWS Academy",
      type: "Certification",
      note: "AWS Academy Cloud Foundations",
      image: "AWScert.png"
    },
    {
      id: "hackerrank-java",
      title: "Java (Basic)",
      platform: "HackerRank",
      type: "Certification",
      note: "Certificate of Accomplishment",
      image: "javacert.png"
    },
    {
      id: "ai-fundamentals",
      title: "AI Fundamentals",
      platform: "IBM",
      type: "Certification",
      note: "Core concepts of Artificial Intelligence",
      image: "AIFundamental.png"
    },
    {
      id: "spring-boot",
      title: "Spring Boot Training",
      platform: "Course",
      type: "Certification",
      note: "Comprehensive Spring Boot Mastery",
      image: "spring.png"
    },
    {
      id: "codechef-badge",
      title: "CodeChef Rating",
      platform: "CodeChef",
      type: "Badge",
      note: "Competitive Programming Achievement",
      image: "CodeChefBadge.png"
    },
    {
      id: "codechef-streak",
      title: "Bronze Streak Badge",
      platform: "CodeChef",
      type: "Badge",
      note: "5 Days Coding Streak Achievement",
      image: "CodeChefBadge (1).png"
    },
    {
      id: "hackerrank-problem-solving",
      title: "Problem Solving",
      platform: "HackerRank",
      type: "Badge",
      note: "3-Star Problem Solving Badge",
      image: "Screenshot 2026-05-19 201514.png"
    },
    {
      id: "hackerrank-java-badge",
      title: "Java Badge",
      platform: "HackerRank",
      type: "Badge",
      note: "5-Star Java Programming Badge",
      image: "Screenshot 2026-05-19 210644.png"
    },
    {
      id: "leetcode-50days-2026",
      title: "50 Days Badge 2026",
      platform: "LeetCode",
      type: "Badge",
      note: "Solving Problems 50+ Days in 2026",
      image: "download.png"
    },
    {
      id: "leetcode-50days-2025",
      title: "50 Days Badge 2025",
      platform: "LeetCode",
      type: "Badge",
      note: "Solving Problems 50+ Days in 2025",
      image: "download (1).png"
    }
  ] as Certification[],
  stats: [
    { label: "DSA Problems Solved", value: 700, plus: true },
    { label: "Certifications & Badges", value: 10, plus: true },
    { label: "Projects Built", value: 5, plus: true }
  ]
};
