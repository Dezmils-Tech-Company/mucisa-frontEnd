import { motion } from 'framer-motion';
import '../CSS-styling/AboutHome.css';
import mucisa from '../assets/mucisa.jpeg'
import {
    BrowserRouter as Router,Routes,Route,Link,useNavigate,Outlet,} from "react-router-dom";
import { FaArrowAltCircleRight, FaInfoCircle } from "react-icons/fa";

const AboutMucisa = () => {
     const navigate = useNavigate();
  return (
    <section className="about-mucisa">
        
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 0}}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 ><FaInfoCircle className="about-icon" />  About MUCISA</h2>
        <p>
          The Maseno University computing and Informatics student Association (MUCISA) is a student-led organization dedicated to fostering innovation, collaboration, and professional growth among computer science enthusiasts. Our mission is to empower students through workshops, hackathons, and networking events, preparing them for successful careers in technology.
          <br />
          <br />
          The association also plays a key role in bridging the gap between students and the tech industry through mentorship programs, networking opportunities, and innovation-driven events. MUCISA strives to foster creativity, leadership, and teamwork among its members while promoting the practical application of computer science in solving real-world challenges.
        </p>
        <button className="learn-more-btn" onClick={() =>
                 navigate("/about")}>learn more  <FaArrowAltCircleRight/></button>
      </motion.div>
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div  className="about-content">
        <img src={mucisa} />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMucisa;