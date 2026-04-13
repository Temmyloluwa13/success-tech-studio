import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Users, Award, Briefcase } from 'lucide-react';
import './About.css';

const Counter: React.FC<{ end: number; prefix?: string; suffix?: string; duration?: number }> = ({ end, prefix = "", suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const About: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: 7, suffix: "+", icon: <Award size={24} /> },
    { label: "Projects Completed", value: 150, suffix: "+", icon: <Briefcase size={24} /> },
    { label: "Happy Clients", value: 100, suffix: "+", icon: <Users size={24} /> },
    { label: "Tech Stacks", value: 15, suffix: "+", icon: <Terminal size={24} /> },
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div 
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-main-content">
          <motion.div 
            className="about-image-wrapper glass-card"
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <img src="/src/assets/profile1.jpg" alt="Success Bolorunde Temiloluwa" className="about-image" />
            <div className="about-image-glow"></div>
          </motion.div>

          <motion.div 
            className="about-text-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="about-headline">
              Transforming Ideas Into <br/>
              <span className="text-gradient-alt">Digital Masterpieces</span>
            </h3>
            <p className="about-bio">
              I am <strong>Success Bolorunde Temiloluwa</strong>, the creative force behind <strong>Success Tech Studio</strong>. As a multi-disciplined tech professional, I blur the lines between development and design to deliver truly remarkable digital experiences.
            </p>
            <p className="about-bio">
              My approach combines strong problem-solving abilities with an obsessive focus on results and user experience. Whether it's architecting a scalable web application, forging an intuitive mobile interface, or automating workflows with AI (Vibe Coding), I bring a unique holistic perspective to every project.
            </p>
            <div className="about-cta">
              <a href="#contact" className="btn btn-primary btn-glow">Let's Talk</a>
            </div>
          </motion.div>
        </div>

        <div className="about-stats-container">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="glass-card stat-card full-stat"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <h4 className="stat-value text-gradient">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
