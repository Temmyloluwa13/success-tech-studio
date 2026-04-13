import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, Zap } from 'lucide-react';
import './Results.css';

const Results: React.FC = () => {
  const results = [
    {
      id: 1,
      icon: <Rocket size={32} />,
      text: "Increased client website conversions by up to 45%",
      delay: 0
    },
    {
      id: 2,
      icon: <DollarSign size={32} />,
      text: "Helped businesses generate more leads through optimized landing pages",
      delay: 0.1
    },
    {
      id: 3,
      icon: <Zap size={32} />,
      text: "Built fast, scalable apps with smooth user experiences",
      delay: 0.2
    }
  ];

  return (
    <section id="results" className="results section-padding">
      <div className="container">
        <motion.div 
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            Proven Results <span className="text-gradient">That Speak</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="results-grid">
          {results.map((result) => (
            <motion.div 
              key={result.id}
              className="result-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: result.delay, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="result-icon-wrapper">
                {result.icon}
              </div>
              <p className="result-text">{result.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
