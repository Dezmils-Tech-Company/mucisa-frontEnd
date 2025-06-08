import React from 'react';
import { motion } from 'framer-motion';
import '../CSS-styling/Mission.css';

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="container">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 ,delay: 0.3  }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2>Our Mission</h2>
          <p>We Strive To Develop And Support Computing And Informatics Students Through State-Of-Art Technology,Innovation,Leadership To Be Internationally Competent and Competative.
          </p>
        </motion.div>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2>Our Vision</h2>
          <p>
            Committed to Technology,Committed to the Future
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;