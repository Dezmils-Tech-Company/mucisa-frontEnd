import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../CSS-styling/QuickStats.css';

const statsData = [
  { label: 'Registered Members ', value: 250 },
  { label: 'Events Held This Sem', value: 45 },
  { label: 'Projects Completed', value: 30 },
  { label: 'Years Active', value: 5 },
];

const StatCard = ({ label, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = 50;
    const steps = Math.ceil(duration / incrementTime);
    const increment = Math.ceil(end / steps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <h3>{count}</h3>
      <p>{label}</p>
    </motion.div>
  );
};

const QuickStats = () => {
  return (
    <section className="quick-stats">
      <h2>Our Impact</h2>
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <StatCard key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  );
};

export default QuickStats;