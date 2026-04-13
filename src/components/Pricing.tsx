import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Smartphone, Layout, ArrowRight } from 'lucide-react';
import './Pricing.css';

const Pricing: React.FC = () => {
  const plans = [
    {
      id: 1,
      title: "Website Projects",
      price: "$300+",
      desc: "Starts from",
      icon: <Layout size={24} />
    },
    {
      id: 2,
      title: "Mobile Apps",
      price: "Custom",
      desc: "Pricing",
      icon: <Smartphone size={24} />
    },
    {
      id: 3,
      title: "AI Solutions",
      price: "Scoped",
      desc: "Based on requirements",
      icon: <Bot size={24} />
    }
  ];

  return (
    <section id="pricing" className="pricing section-padding">
      <div className="container">
        <motion.div 
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            Simple & Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              className="pricing-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="pricing-header">
                <div className="pricing-icon">{plan.icon}</div>
                <h3 className="pricing-title">{plan.title}</h3>
              </div>
              <div className="pricing-amount text-gradient">{plan.price}</div>
              <p className="pricing-desc">{plan.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="pricing-cta text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="#contact" className="btn btn-primary btn-glow btn-lg mt-5">
            Request a Custom Quote <ArrowRight size={18} style={{ marginLeft: '10px' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
