import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import './VideoSection.css';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-section" className="video-section section-padding">
      <div className="container">
        <motion.div 
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            Meet <span className="text-gradient">Success</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="video-container glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="video-thumbnail">
            <div className="video-overlay text-center">
              <h3 className="video-quote">“Hi, I’m Success, and I help businesses build powerful digital solutions…”</h3>
              <p className="video-subtext">Click to watch the introduction</p>
              
              <button 
                className="play-btn"
                onClick={() => setIsPlaying(true)}
                aria-label="Play video"
              >
                <div className="play-icon-glow"></div>
                <Play size={36} className="play-icon" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            className="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlaying(false)}
          >
            <motion.div 
              className="video-modal-content glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setIsPlaying(false)}>
                <X size={24} />
              </button>
              
              <div className="video-placeholder">
                <span className="text-gradient">Your Video Here</span>
                <p>Replace this completely with an iframe or HTML5 video tag.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoSection;
