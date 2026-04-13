import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Bot, ArrowRight } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: "web",
      title: "Website Development",
      icon: <Layout size={32} />,
      desc: "Modern, responsive, and conversion-focused websites tailored to your business goals.",
      benefits: ["SEO Optimized", "Blazing Fast Performance", "Pixel-perfect Design", "Custom CMS Integration"],
      delay: 0
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: <Smartphone size={32} />,
      desc: "Clean, scalable, and user-friendly mobile applications for Android and iOS.",
      benefits: ["iOS & Android Support", "Offline Capabilities", "Smooth Animations", "App Store Deployment"],
      delay: 0.1
    },
    {
      id: "vibe",
      title: "AI / Vibe Coding Solutions",
      icon: <Bot size={32} />,
      desc: "Smart automation, AI chatbots, and next-gen digital solutions.",
      benefits: ["Rapid Prototyping", "Prompt Engineering", "Custom AI Workflows", "Agentic Development"],
      delay: 0.2
    }
  ];

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <motion.div 
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            What I Can Do <span className="text-gradient">For You</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="services-grid">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="service-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              <ul className="service-benefits">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <span className="benefit-dot"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="service-link text-gradient">
                Let's discuss <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '50px' }}
        >
          <a href="#contact" className="btn btn-primary btn-glow btn-lg">
            Let's Build Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
