import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, BrainCircuit, MonitorPlay, CheckCircle2 } from 'lucide-react';
import './Skills.css';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    { name: "Web Development", icon: <Globe size={20} /> },
    { name: "Mobile Development", icon: <Smartphone size={20} /> },
    { name: "Vibe Coding", icon: <BrainCircuit size={20} /> },
    { name: "Presentation Design", icon: <MonitorPlay size={20} /> },
  ];

  const skillsData = [
    [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript / JS", level: 90 },
      { name: "Node.js / Express", level: 85 },
      { name: "CSS / Tailwind", level: 95 },
      { name: "Database Design", level: 80 },
    ],
    [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "iOS / Android UI", level: 90 },
      { name: "API Integration", level: 95 },
      { name: "App Store Deployment", level: 80 },
    ],
    [
      { name: "AI Automation", level: 90 },
      { name: "Prompt Engineering", level: 95 },
      { name: "Cursor / Copilot", level: 98 },
      { name: "Workflow Setup", level: 85 },
      { name: "Rapid Prototyping", level: 95 },
    ],
    [
      { name: "Pitch Decks", level: 98 },
      { name: "Business Presentations", level: 95 },
      { name: "Figma / Canva", level: 90 },
      { name: "Visual Storytelling", level: 95 },
      { name: "Data Visualization", level: 88 },
    ]
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.div 
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="skills-container wrapper-glass">
          <div className="skills-sidebar">
            {categories.map((category, idx) => (
              <button
                key={category.name}
                className={`category-btn ${activeCategory === idx ? 'active' : ''}`}
                onClick={() => setActiveCategory(idx)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
                {activeCategory === idx && (
                  <motion.div layoutId="activeCategory" className="active-indicator" />
                )}
              </button>
            ))}
          </div>

          <div className="skills-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="skills-grid"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {skillsData[activeCategory].map((skill, idx) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item glass-card"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, boxShadow: 'var(--glow-cyan)' }}
                  >
                    <div className="skill-header">
                      <CheckCircle2 size={18} className="skill-check" />
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>
                    <div className="skill-progress-bg">
                      <motion.div 
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 1, type: "spring" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
