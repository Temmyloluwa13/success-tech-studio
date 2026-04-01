import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

import slideWeb from '../assets/banner_web.png';
import slideMobile from '../assets/banner_mobile.png';
import slideAi from '../assets/banner_ai.png';
import slidePresentation from '../assets/banner_presentation.png';

const slides = [
  { id: 1, image: slideWeb, alt: "Web Development" },
  { id: 2, image: slideMobile, alt: "Mobile App Development" },
  { id: 3, image: slideAi, alt: "Vibe Coding with AI" },
  { id: 4, image: slidePresentation, alt: "Presentation Design" }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Background Slideshow */}
      <div className="hero-slideshow">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        </AnimatePresence>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="pulse-dot"></span> Available for new projects
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I Build Digital Experiences <br /> 
            That <br className="mobile-break" />
            <span className="text-gradient">Convert & Inspire</span>
          </motion.h1>

          <motion.div 
            className="hero-roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="role">Web Developer</span>
            <span className="divider">|</span>
            <span className="role">Mobile App Developer</span>
            <span className="divider">|</span>
            <span className="role">Vibe Coder</span>
            <span className="divider">|</span>
            <span className="role">Presentation Designer</span>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="#portfolio" className="btn btn-primary btn-glow">
              View Portfolio <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Hire Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="scroll-indicator">
        <motion.div 
          className="mouse"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="wheel"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
