import React from 'react';
import { motion } from 'framer-motion';
import '../CSS-styling/programs.css';
import {
    BrowserRouter as Router,Routes, Route, Link,useNavigate,
    Outlet} from "react-router-dom";

const programData = [
  { title: 'Hackathons',
    description: 'Showcase coding skills in real-time competitions.',
  Path: 'hackathon'},
  { title: 'Workshops',
    description: 'Hands-on sessions on tech tools and programming.' },
  { title: 'Community Outreach', description: 'Engage with the local community through tech.' },
  { title: 'Tech Talks', 
    description: 'Knowledge sharing sessions with professionals.' }
];

const Programs = () => {
    const navigate = useNavigate();
  return (
    <section className="programs-section">
      <h2>Our Programs</h2>
     
      <div className="programs-grid">
        {programData.map((program, index) => (
          <motion.div
            className="program-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3>{program.title}</h3>
            <p>{program.description}</p>

            <button  key={index} onClick={() =>
                 navigate(program.Path)}>view More</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Programs;