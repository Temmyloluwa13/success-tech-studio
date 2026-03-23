import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Results from './components/Results';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudy from './components/CaseStudy';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import VideoSection from './components/VideoSection';
import LeadMagnet from './components/LeadMagnet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import logoIcon from './assets/logo_icon.svg';
import './App.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 1000, mass: 0.1 }}
      />
      <motion.div
        className="custom-cursor-follower"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 400, mass: 0.3 }}
      />

      <AnimatePresence>
        {loading ? (
          <motion.div
            className="preloader"
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            key="preloader"
          >
            <motion.div
              className="preloader-logo-wrap"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="pulse-ring"></div>
              <img src={logoIcon} alt="Success Tech Studio" className="preloader-logo-img" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="preloader-label text-gradient"
            >
              Success Tech Studio
            </motion.p>
            <motion.div
              className="preloader-bar-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="preloader-bar"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.9, duration: 1.3, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key="content"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Results />
              <Services />
              <Portfolio />
              <CaseStudy />
              <Testimonials />
              <Process />
              <Pricing />
              <VideoSection />
              <LeadMagnet />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
