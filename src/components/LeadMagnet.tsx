import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail } from 'lucide-react';
import './LeadMagnet.css';

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <section id="lead-magnet" className="lead-magnet section-padding">
      <div className="container">
        <motion.div 
          className="lead-magnet-card glass-card"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <div className="lm-content">
            <h2 className="lm-title">Get a Free <span className="text-gradient">Website Audit</span></h2>
            <p className="lm-desc">
              Enter your email and I’ll review your website and give you actionable improvements to increase conversions and performance immediately.
            </p>
            
            {submitted ? (
              <motion.div 
                className="lm-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Check size={28} className="success-check" />
                <span>Audit Request Received! Check your inbox shortly.</span>
              </motion.div>
            ) : (
              <form className="lm-form" onSubmit={handleSubmit}>
                <div className="lm-input-group">
                  <Mail className="lm-icon" size={20} />
                  <input 
                    type="url" 
                    placeholder="Enter your website URL" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="lm-input"
                  />
                  <div className="input-focus-border"></div>
                </div>
                <button type="submit" className="btn btn-primary lm-submit">
                  Get Free Audit
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;
