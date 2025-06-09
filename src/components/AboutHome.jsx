import { motion } from 'framer-motion';
import '../CSS-styling/AboutHome.css';

import {  FaInfoCircle } from "react-icons/fa";
import wrric1 from  '../assets/wrric1.jpeg';
const AboutMucisa = () => {
   
  return (
    <section className="about-mucisa">
      
        
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 0}}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <img src={wrric1} alt="about" />
        <h2 > <FaInfoCircle/> About MUCISA</h2>
        <p>
          The Maseno University computing and Informatics student Association (MUCISA) is a student-led organization dedicated to fostering innovation, collaboration, and professional growth among computer science enthusiasts. It is the officially Affliated association of the School of Computing and Informatics at Maseno University.
          <br />
          <br />
           Established with the vision of uniting students in the field of technology, MUCISA plays a pivotal role in organising activities that promote academic excellence, career growth and community development. We focus on equipping students with skills, resources and networks necessary to succeed in a rapidly evolving tech-driven world.
          </p>
      </motion.div>
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        
         <motion.div
                  className="card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 ,delay: 0.3  }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <h2>Our Motto</h2>
                  <p>Embracing Technology for innovators
                  </p>
                </motion.div>
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
      </motion.div>
    </section>
  );
};

export default AboutMucisa;