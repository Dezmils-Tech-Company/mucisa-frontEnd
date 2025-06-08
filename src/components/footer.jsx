import React from 'react';
import '../CSS-styling/footer.css';

const Footer = () => {
  return (
    <footer className="mucisa-footer">
      <div className="footer-content">
        <h3>MUCISA</h3>
        <p>Empowering students in tech through collaboration, innovation, and real-world experiences.</p>
        <p>&copy; {new Date().getFullYear()} MUCISA - Maseno University. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;