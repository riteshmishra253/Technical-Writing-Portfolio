import React, { useState } from 'react';
import { FileText, Code, Briefcase, Award, Mail, Linkedin, Github, Menu, X, ChevronRight, BookOpen, Zap, Users, Cloud } from 'lucide-react';

export default function RiteshPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const experiences = [
    {
      company: "Bluebit Technologies",
      role: "Technical Content Writer",
      period: "June 2025 - Present",
      highlights: [
        "Write and update website content to clearly communicate product features and benefits",
        "Leverage AI tools to accelerate content creation and reduce documentation time by 40%",
        "Create comprehensive user guides for software functionality and workflows",
        "Collaborate with development and QA teams to understand technical features",
        "Translate complex technical concepts into user-friendly documentation"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Alphabin Technology Consulting",
      role: "Technical Content Writer",
      period: "June 2024 - April 2025",
      highlights: [
        "Utilized AI-powered tools to streamline documentation workflows",
        "Collaborated with technical teams to document software features and deployment processes",
        "Created blogs, listicles, and articles covering product updates and features"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const projects = [
    {
      title: "Smart Warehouse",
      subtitle: "Android Application",
      period: "Mar 2024 - Aug 2024",
      description: "Comprehensive warehouse management system with offline sync and inventory tracking",
      achievements: [
        "Created technical documentation for warehouse management features",
        "Built offline sync, inventory tracking, and picklist management",
        "Developed intuitive UI/UX with clear navigation",
        "Added e-signature, PDF generation, and printing capabilities"
      ],
      tech: ["Kotlin", "Room", "Retrofit", "Android Studio"],
      icon: "📦"
    },
    {
      title: "Biometric Facial Recognition",
      subtitle: "Attendance Management System",
      period: "May 2023 - Jun 2023",
      description: "AI-powered attendance system using facial recognition technology",
      achievements: [
        "Created user documentation for system setup and daily usage",
        "Built facial recognition features and database management",
        "Improved attendance accuracy and efficiency for small businesses"
      ],
      tech: ["Python", "OpenCV", "Django", "SQLite"],
      icon: "👤"
    },
    {
      title: "Restaurant Tracking",
      subtitle: "Mobile Application",
      period: "Aug 2022 - Sept 2022",
      description: "Android app for tracking and managing favorite restaurants",
      achievements: [
        "Documented user workflows and feature descriptions",
        "Developed intuitive restaurant management interface"
      ],
      tech: ["Android", "Java"],
      icon: "🍽️"
    }
  ];

  const skills = {
    "Programming": ["Java", "Python", "C++", "JavaScript", "SQL"],
    "Web Technologies": ["HTML", "React.js", "Node.js", "Django", "Spring Boot"],
    "Cloud & DevOps": ["Google Cloud Platform", "Docker", "Kubernetes", "Git"],
    "Technical Writing": ["User Guides", "API Documentation", "Website Content", "AI-Assisted Content"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ritesh Mishra
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {['home', 'experience', 'projects', 'skills', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize font-medium transition-all ${
                  activeSection === section 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden bg-black/50 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-3">
            {['home', 'experience', 'projects', 'skills', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setMenuOpen(false);
                }}
                className={`capitalize font-medium text-left ${
                  activeSection === section 
                    ? 'text-cyan-400' 
                    : 'text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                RM
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Ritesh Mishra
              </h2>
              <p className="text-2xl text-cyan-400 mb-6">Technical Content Writer</p>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
                Bridging the gap between complex technical systems and user understanding through 
                clear documentation and intuitive software solutions. Combining hands-on development 
                experience with technical writing expertise to create documentation that truly resonates.
              </p>
              <div className="flex gap-4 justify-center mb-12">
                <a href="mailto:mishrariteshraj52@gmail.com" 
                   className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all text-white">
                  <Mail size={24} />
                </a>
                <a href="https://linkedin.com/in/riteshmishra2000" 
                   className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all text-white">
                  <Linkedin size={24} />
                </a>
                <a href="tel:+919016632018" 
                   className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-all text-white">
                  <Github size={24} />
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur rounded-2xl p-6 border border-cyan-500/30 hover:scale-105 transition-transform">
                <Zap className="text-cyan-400 mb-3" size={36} />
                <h3 className="text-3xl font-bold text-white mb-2">40%</h3>
                <p className="text-gray-300 text-sm">Faster Documentation with AI</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur rounded-2xl p-6 border border-purple-500/30 hover:scale-105 transition-transform">
                <Briefcase className="text-purple-400 mb-3" size={36} />
                <h3 className="text-3xl font-bold text-white mb-2">1.5+ Years</h3>
                <p className="text-gray-300 text-sm">Technical Writing Experience</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur rounded-2xl p-6 border border-green-500/30 hover:scale-105 transition-transform">
                <Code className="text-green-400 mb-3" size={36} />
                <h3 className="text-3xl font-bold text-white mb-2">5+ Projects</h3>
                <p className="text-gray-300 text-sm">Software Development</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur rounded-2xl p-6 border border-orange-500/30 hover:scale-105 transition-transform">
                <Cloud className="text-orange-400 mb-3" size={36} />
                <h3 className="text-3xl font-bold text-white mb-2">40+ Labs</h3>
                <p className="text-gray-300 text-sm">Google Cloud Platform</p>
              </div>
            </div>

            {/* What I Bring */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all">
                <FileText className="text-cyan-400 mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-3">Technical Writing Excellence</h3>
                <p className="text-gray-300">Creating user guides, API documentation, and website content that simplifies complex concepts for diverse audiences.</p>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
                <Code className="text-purple-400 mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-3">Software Development Skills</h3>
                <p className="text-gray-300">Hands-on experience with Java, Python, React.js, and cloud technologies enables deeper understanding of documented systems.</p>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all">
                <Users className="text-pink-400 mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-3">Cross-Team Collaboration</h3>
                <p className="text-gray-300">Working seamlessly with development, QA, and product teams to capture accurate technical information and workflows.</p>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <p className="text-cyan-400 text-lg font-medium">{exp.company}</p>
                    </div>
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/30 mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <ChevronRight className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <BookOpen className="text-purple-400" size={28} />
                Education
              </h3>
              <div className="ml-11">
                <h4 className="text-xl font-bold text-white">Bachelor of Technology in Computer Science</h4>
                <p className="text-purple-400 font-medium">Government Engineering College Bharatpur, India</p>
                <p className="text-gray-300 mt-2">Aug 2019 - Aug 2023 • CGPA: 80.03</p>
              </div>
            </div>

            {/* Achievement */}
            <div className="mt-8 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur rounded-2xl p-8 border border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Award className="text-orange-400" size={28} />
                Google Cloud Ready Facilitator
              </h3>
              <div className="ml-11 space-y-2 text-gray-300">
                <p className="flex items-start gap-2">
                  <ChevronRight className="text-orange-400 flex-shrink-0 mt-1" size={18} />
                  Completed 40+ hands-on labs covering IAM, GKE, Compute Engine, Cloud Functions, and BigQuery
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="text-orange-400 flex-shrink-0 mt-1" size={18} />
                  Created infrastructure automation scripts for cloud resource management
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="text-orange-400 flex-shrink-0 mt-1" size={18} />
                  Gained practical experience in cloud identity configurations and application deployments
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
            <div className="grid gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all group">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-4xl">{project.icon}</span>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-purple-400 font-medium">{project.subtitle}</p>
                        </div>
                        <span className="text-gray-400 text-sm mt-2 md:mt-0">{project.period}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <ChevronRight className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg text-cyan-400 text-sm font-medium border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items], idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:scale-105 transition-transform shadow-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Competencies */}
            <div className="mt-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur rounded-2xl p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Competencies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Technical Documentation",
                  "User Guide Creation", 
                  "Website Content Writing",
                  "Cross-functional Collaboration",
                  "AI-Assisted Content Creation",
                  "API Documentation"
                ].map((comp, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="font-medium">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6 text-center">Let's Connect</h2>
              <p className="text-gray-300 text-center mb-12 text-lg">
                Looking for a technical writer who understands code? Let's talk about your documentation needs!
              </p>
              
              <div className="space-y-6">
                <a href="mailto:mishrariteshraj52@gmail.com" 
                   className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all group">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium text-lg">mishrariteshraj52@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/riteshmishra2000" 
                   className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all group">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform">
                    <Linkedin className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white font-medium text-lg">linkedin.com/in/riteshmishra2000</p>
                  </div>
                </a>
                
                <a href="tel:+919016632018" 
                   className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-green-400/50 transition-all group">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform">
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium text-lg">+91 9016632018</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 text-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-lg">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur border-t border-white/10 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Ritesh Mishra. Crafted with React & Tailwind CSS.</p>
          <p className="text-gray-500 text-sm mt-2">Technical Writer | Developer | Problem Solver</p>
        </div>
      </footer>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}