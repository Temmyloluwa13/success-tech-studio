import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Target, Zap } from 'lucide-react';
import './CaseStudy.css';

const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="case-study section-padding">
      <div className="container">
        <motion.div 
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            Case <span className="text-gradient">Study</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="case-study-card glass-card">
          <motion.div 
            className="case-study-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="cs-headline">How I Helped a Business Increase Conversions by 45%</h3>
          </motion.div>

          <div className="cs-grid">
            <motion.div 
              className="cs-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="cs-subtitle"><Target className="cs-icon text-gradient" size={24} /> The Problem</h4>
              <p className="cs-text">
                The client had a website that looked outdated and wasn't converting visitors effectively into paying customers.
              </p>
              
              <h4 className="cs-subtitle" style={{ marginTop: '30px' }}><Zap className="cs-icon text-gradient" size={24} /> The Solution</h4>
              <p className="cs-text">
                I redesigned the website with a modern UI, improved the overall architecture and structure, and aggressively optimized it for conversions.
              </p>
            </motion.div>

            <motion.div 
              className="cs-col cs-highlight-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="cs-subtitle">What I Did:</h4>
              <ul className="cs-list">
                <li><CheckCircle2 size={18} className="check-icon" /> UI/UX redesign</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Performance optimization</li>
                <li><CheckCircle2 size={18} className="check-icon" /> Mobile responsiveness</li>
              </ul>
            </motion.div>

            <motion.div 
              className="cs-col cs-result-box"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="cs-subtitle"><TrendingUp className="cs-icon text-gradient" size={24} /> The Result:</h4>
              <ul className="cs-result-list">
                <li>
                  <span className="rs-number">45%</span>
                  <span className="rs-desc">Increase in conversions</span>
                </li>
                <li>
                  <span className="rs-number"><Users size={28} /></span>
                  <span className="rs-desc">Better user engagement</span>
                </li>
                <li>
                  <span className="rs-number"><TrendingUp size={28} /></span>
                  <span className="rs-desc">More leads generated</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
