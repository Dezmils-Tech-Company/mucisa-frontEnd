import React from 'react';
import { motion } from 'framer-motion';
import { FaDonate, FaChalkboardTeacher, FaUsers, FaHandsHelping } from 'react-icons/fa';
import '../CSS-styling/support.css';

// Motion variants for container and cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, boxShadow: '0 8px 20px rgba(0, 188, 212, 0.3)' },
};

const SupportPage = () => {
  return (
    <main className="support">
      {/* Page header */}
      

      {/* Support options grid */}
      <motion.section 
        className="support__grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Financial Support */}
        <motion.article 
          className="support__card"
          variants={cardVariants}
          whileHover="hover"
          tabIndex={0}
          aria-label="Financial Support"
        >
          <FaDonate className="support__icon" aria-hidden="true" />
          <h2>Financial Support</h2>
          <p>
            Help us fund scholarships, resources, events, and infrastructure to empower more students.
          </p>
          <button className="support__btn" aria-label="Donate financial support">
            Donate Now
          </button>
        </motion.article>

        {/* Educational Bootcamp */}
        <motion.article 
          className="support__card"
          variants={cardVariants}
          whileHover="hover"
          tabIndex={0}
          aria-label="Educational Bootcamp Support"
        >
          <FaChalkboardTeacher className="support__icon" aria-hidden="true" />
          <h2>Educational Bootcamp</h2>
          <p>
            Sponsor or facilitate bootcamp sessions to boost practical skills and employability of our members.
          </p>
          <button className="support__btn" aria-label="Support educational bootcamp">
            Get Involved
          </button>
        </motion.article>

        {/* Seminars & Workshops */}
        <motion.article 
          className="support__card"
          variants={cardVariants}
          whileHover="hover"
          tabIndex={0}
          aria-label="Support Seminars and Workshops"
        >
          <FaUsers className="support__icon" aria-hidden="true" />
          <h2>Seminars & Workshops</h2>
          <p>
            Partner with us to organize seminars and workshops that inspire and educate our student community.
          </p>
          <button className="support__btn" aria-label="Support seminars and workshops">
            Partner With Us
          </button>
        </motion.article>

        {/* General Support */}
        <motion.article 
          className="support__card"
          variants={cardVariants}
          whileHover="hover"
          tabIndex={0}
          aria-label="General Support"
        >
          <FaHandsHelping className="support__icon" aria-hidden="true" />
          <h2>General Support</h2>
          <p>
            Any other support that helps Mucisa grow as a student-led institution is highly valued.
          </p>
          <button className="support__btn" aria-label="Provide general support">
            Contact Us
          </button>
        </motion.article>
      </motion.section>
    </main>
  );
};

export default SupportPage;
