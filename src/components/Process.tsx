import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, PaintBucket, TestTube, Rocket } from 'lucide-react';
import './Process.css';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery",
      desc: "Understanding your goals",
      icon: <Search size={28} />
    },
    {
      id: 2,
      title: "Strategy",
      desc: "Planning the solution",
      icon: <Map size={28} />
    },
    {
      id: 3,
      title: "Design & Development",
      desc: "Bringing it to life",
      icon: <PaintBucket size={28} />
    },
    {
      id: 4,
      title: "Testing",
      desc: "Ensuring everything works perfectly",
      icon: <TestTube size={28} />
    },
    {
      id: 5,
      title: "Launch",
      desc: "Delivering results",
      icon: <Rocket size={28} />
    }
  ];

  return (
    <section id="process" className="process section-padding">
      <div className="container">
        <motion.div 
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            My <span className="text-gradient">Process</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="process-step"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-content glass-card">
                <div className="step-icon">
                  {step.icon}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
