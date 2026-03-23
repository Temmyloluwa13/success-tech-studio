import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaPinterest } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import './Contact.css';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <motion.div 
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-headline">Ready to start your next big project?</h3>
            <p className="contact-subheadline">
              Reach out today and let's craft an experience that elevates your brand to the next level.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div className="contact-text">
                  <h4>Email Me</h4>
                  <a href="mailto:successbolorunde@gmail.com">successbolorunde@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <div className="contact-text">
                  <h4>Call Me</h4>
                  <a href="tel:07034260241">07034260241</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <span>Nigeria</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
              <a href="#" className="social-icon" aria-label="WhatsApp"><FaWhatsapp size={20} /></a>
              <a href="#" className="social-icon" aria-label="Pinterest"><FaPinterest size={20} /></a>
              <a href="#" className="social-icon" aria-label="Upwork"><SiUpwork size={20} /></a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <Send size={40} />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="input-focus-border"></div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="input-focus-border"></div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="input-focus-border"></div>
                </div>
                
                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send size={18} style={{ marginLeft: '10px' }} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
