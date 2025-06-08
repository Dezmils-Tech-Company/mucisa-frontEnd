import React from 'react';
import { motion } from 'framer-motion';
import '../CSS-styling/hero.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
const navigate = useNavigate();

  return (
    <div className="hero-section">
      <motion.div className="overlay"
      initial={{ opacity: 0, y:-150 }}
          whileInView={{ opacity: 1, y: 0,x:0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
           whileInView={{ opacity: 1, y: 0,x:0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
         Embracing Technology For Innovators
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          MUCISA - Maseno University Computing and Informatics Student Association
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, x:150 }}
          whileInView={{ opacity: 1, y: 0,x:0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <button onClick={()=>navigate( '/register')} className="join-btn">Join Us</button>
          <button className="explore-btn">Explore Projects</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

