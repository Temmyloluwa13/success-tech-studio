import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      content: "Working with Success was a game changer. The website exceeded expectations.",
      author: "Elena Rodriguez",
      role: "CEO, NexaCorp",
      avatar: "ER"
    },
    {
      id: 2,
      content: "Very professional and delivered beyond what I imagined.",
      author: "David Chen",
      role: "Founder, FinTech Solutions",
      avatar: "DC"
    },
    {
      id: 3,
      content: "Highly recommend for anyone serious about quality work.",
      author: "Sarah Jenkins",
      role: "Product Manager, ConnectApp",
      avatar: "SJ"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5 }
    })
  };

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <motion.div 
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            Client <span className="text-gradient">Success</span> Stories
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="carousel-container">
          <div className="carousel-wrapper">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonial-card glass-card"
              >
                <div className="quote-icon">
                  <Quote size={40} />
                </div>
                <p className="testimonial-content">"{testimonials[currentIndex].content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonials[currentIndex].avatar}</div>
                  <div className="author-info">
                    <h4>{testimonials[currentIndex].author}</h4>
                    <span>{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={handlePrev}>
              <ChevronLeft size={24} />
            </button>
            <div className="carousel-indicators">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                />
              ))}
            </div>
            <button className="carousel-btn next" onClick={handleNext}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
