import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Github } from 'lucide-react';
import './Portfolio.css';

// Project image imports
import webProjectImg from '../assets/web_project.png';
import mobileProjectImg from '../assets/mobile_project.png';
import vibeProjectImg from '../assets/vibe_project.png';
import presentationProjectImg from '../assets/presentation_project.png';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tools: string[];
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Development', 'Mobile App', 'Vibe Coding', 'Presentation Design'];

  const projects: Project[] = [
    {
      id: 1,
      title: "SaaS Dashboard Platform",
      category: "Web Development",
      description: "Modern analytics dashboard for business tracking.",
      fullDescription: "Built a modern analytics dashboard for business tracking. Features include real-time data visualization, a clean UI, and blazing fast performance. Result: Improved user engagement and usability for enterprise clients.",
      image: webProjectImg,
      tools: ["React", "TypeScript", "Tailwind CSS", "Recharts"]
    },
    {
      id: 2,
      title: "E-commerce Store",
      category: "Web Development",
      description: "Full online store with payment integration.",
      fullDescription: "Designed and developed a complete e-commerce solution with seamless payment gateway integration, optimized product pages, and full mobile responsiveness. Result: Increased total sales and significantly reduced bounce rate.",
      image: webProjectImg,
      tools: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"]
    },
    {
      id: 3,
      title: "High-Converting Landing Page",
      category: "Web Development",
      description: "Marketing campaign page focused on conversion optimization.",
      fullDescription: "Built specifically for high-budget marketing campaigns. Every element from the copy placement to the micro-interactions was A/B tested for conversion optimization. Result: Higher lead generation and reduced CPA.",
      image: webProjectImg,
      tools: ["HTML5", "CSS3", "GSAP", "Framer Motion"]
    },
    {
      id: 4,
      title: "Task Management App",
      category: "Mobile App",
      description: "Clean UI with productivity features and real-time sync.",
      fullDescription: "A powerful task management application featuring a clean, distraction-free UI. It includes robust productivity features, real-time sync across devices, and instant push notifications to keep users on track.",
      image: mobileProjectImg,
      tools: ["React Native", "Firebase", "Redux", "Node.js"]
    },
    {
      id: 5,
      title: "Chat Application",
      category: "Mobile App",
      description: "Messaging system with modern UX and smooth interface.",
      fullDescription: "A full-fledged messaging system boasting a highly modern UX. Emphasizes a smooth, buttery responsive interface with end-to-end encryption, group chats, and media sharing capabilities.",
      image: mobileProjectImg,
      tools: ["Flutter", "Dart", "WebSockets", "Supabase"]
    },
    {
      id: 6,
      title: "AI Chatbot System",
      category: "Vibe Coding",
      description: "Automated chatbot for customer support.",
      fullDescription: "Built an intelligent, context-aware automated chatbot tailored for customer support teams. It handles complex queries, connects to company knowledge bases, and successfully reduced manual workload by 40%.",
      image: vibeProjectImg,
      tools: ["Python", "OpenAI", "LangChain", "FastAPI"]
    },
    {
      id: 7,
      title: "Automation Workflow Tool",
      category: "Vibe Coding",
      description: "Automated repetitive business tasks to improve efficiency.",
      fullDescription: "Leveraged AI and custom scripting to automate highly repetitive business tasks across multiple software platforms. Significantly improved operational efficiency and entirely eliminated manual data entry errors.",
      image: vibeProjectImg,
      tools: ["Node.js", "Puppeteer", "Make/Integromat", "GPT-4"]
    },
    {
      id: 8,
      title: "Investor Pitch Deck",
      category: "Presentation Design",
      description: "Designed for startup funding with clean storytelling.",
      fullDescription: "A high-stakes presentation deck designed exclusively for startup funding rounds. Used clean, persuasive storytelling and premium custom graphics to clearly articulate the business model and market opportunity.",
      image: presentationProjectImg,
      tools: ["Figma", "Keynote", "Illustrator"]
    },
    {
      id: 9,
      title: "Real Estate Presentation",
      category: "Presentation Design",
      description: "High-end visuals focused on selling luxury properties.",
      fullDescription: "A visually breathtaking presentation leveraging high-end architectural visuals. Designed to sell luxury properties by emphasizing location benefits, premium amenities, and investment potential through stunning layouts.",
      image: presentationProjectImg,
      tools: ["PowerPoint", "Photoshop", "After Effects"]
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <motion.div 
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="portfolio-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="portfolio-card glass-card"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -10 }}
              >
                <div className="portfolio-img-wrapper">
                  <img src={project.image} alt={project.title} className="portfolio-img" />
                  <div className="portfolio-overlay">
                    <span className="view-btn">View Project</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-category text-gradient-alt">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-desc">{project.description}</p>
                  <div className="portfolio-tools">
                    {project.tools.slice(0, 3).map(tool => (
                      <span key={tool} className="tool-badge">{tool}</span>
                    ))}
                    {project.tools.length > 3 && <span className="tool-badge">+{project.tools.length - 3}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content glass-card"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
              
              <div className="modal-body">
                <span className="modal-category text-gradient-alt">{selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-full-desc">{selectedProject.fullDescription}</p>
                
                <div className="modal-tech">
                  <h4>Technologies Used:</h4>
                  <div className="portfolio-tools">
                    {selectedProject.tools.map(tool => (
                      <span key={tool} className="tool-badge">{tool}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button className="btn btn-primary" style={{ flex: 1 }}>
                    <ExternalLink size={18} style={{ marginRight: '8px' }}/> Live Preview
                  </button>
                  <button className="btn btn-outline" style={{ flex: 1 }}>
                    <Github size={18} style={{ marginRight: '8px' }}/> Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
