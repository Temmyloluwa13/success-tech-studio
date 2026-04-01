import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaPinterest } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import logoIcon from '../assets/logo_icon.svg';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoIcon} alt="Success Tech Studio" className="footer-logo-img" />
              <span className="text-gradient">Success Tech Studio</span>
            </Link>
            <p className="footer-tagline">
              Building futuristic digital experiences that convert and inspire. Pushing the boundaries of web development, mobile apps, and vibe coding.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/successtechstudio/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><FaInstagram size={18} /></a>
              <a href="https://www.linkedin.com/in/success-bolorunde-126b90295" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
              <a href="https://wa.me/2347034260241" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><FaWhatsapp size={18} /></a>
              <a href="https://www.pinterest.com/success_innovative_designs/?actingBusinessId=1078893791890554521" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Pinterest"><FaPinterest size={18} /></a>
              <a href="#" className="social-link" aria-label="Upwork"><SiUpwork size={18} /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><a href="/#skills">My Arsenal</a></li>
                <li><Link to="/portfolio">Featured Projects</Link></li>
              </ul>
            </div>

            <div className="link-group">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">Vibe Coding</a></li>
                <li><a href="#services">Presentation Design</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Success Tech Studio. All rights reserved.</p>
          <button id="scroll-top-btn" className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
