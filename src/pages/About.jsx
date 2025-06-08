import React from "react";
import {  FaBullseye, FaInfoCircle } from "react-icons/fa";
import {AiOutlineUser} from "react-icons/ai";
import {
    BrowserRouter as Router,Routes,Route,Link,useNavigate,Outlet,} from "react-router-dom";
import '../CSS-styling/About.css';
import wrric1 from '../assets/wrric1.jpeg'
import about1 from '../assets/about1.jpg'



export default function About(){
    return(
        <>
              
                  <nav className="about-nav">
        <ul>
          <li>
            <Link to="team" className="nav-link">
              <AiOutlineUser className="nav-icon" /> Our Team
            </Link>
          </li>
          <li>
            <Link to="company" className="nav-link">
              Our Partners
            </Link>
          </li>
        </ul>
      </nav>
                  <Outlet />
               <div className="about-container">
        <section className="about-card">
          <FaInfoCircle className="about-icon" />
          <div className="about-hero">
            <h1>About MUCISA</h1>
            <p className="subtitle">Embracing Technology For Innovators</p>
          </div>

          <p className="about-text">
            MUCISA stands for Maseno University Computing and Informatics Students Association. It is the official association of the School of Computing and Informatics at Maseno University, dedicated to providing a platform for students pursuing courses in school of computing and informatics and any related discipline. Our core mission is to strive to develop and support computing and informatics Students through state-of-art technology, innovation and Leadership, to be internationally competent and competitive.
            <br />
            <img src={wrric1} alt="hhh" />
            <br />
            Established with the vision of uniting students in the field of technology, MUCISA plays a pivotal role in organising activities that promote academic excellence, career growth and community development. We focus on equipping students with skills, resources and networks necessary to succeed in a rapidly evolving tech-driven world.
          </p>
          <p className="about-text">
            Throughout each academic semester, MUCISA curates and delivers a robust calendar of activities designed to enhance learning, foster innovation, and build professional competence. One of the highlights of these activities is the hosting of hackathons, which bring together students to collaborate on solving real-life problems through innovative coding and software development. These events are complemented by coding nights, where members meet informally to code together, share ideas, and support one anothers technical growth. The association also organizes tech talks and workshops, where industry experts and alumni are invited to share insights on emerging trends, practical tools, and career advice. Members are encouraged to engage in collaborative group projects, contributing to open-source platforms, or building solutions that address local and global issues. These projects not only build technical skills but also strengthen teamwork and leadership.
          </p>
          <img className="image" src={about1} alt="hhh" />
        </section>


                <section className="about-card">
                  <FaBullseye className="about-icon" />
                           
        <h1> MUCISA Objectives</h1>
                     <p className="subtitle">committed to technology, committed to the future</p>
               <ol>
                <li>
                    To establish an efficient, accountable and transparent association
of Computing and Informatics students.
                </li>
                <li>
                    To foster peaceful enjoyment of the freedoms, right and privileges
as well as the spirit of unity and understanding among members.
                </li>
                <li>
                    To conduct career talks aimed at exposing members to the
challenges they expect in the prospective careers and develop an
interactive platform with personalities who are successful in their
careers and fields of operation.
                </li>
                <li>
                    To raise funds through a lawful means for the purposes of
financing MUCISA affairs and activities.
                </li>
                <li>
                    To create and sustain alumni of MUCISA members by developing
and maintaining a database of all members.
                </li>
                <li>
                    To organize and hold conferences, clubs, seminars, talks and
exhibition on matters concerning science, computing and
technology such as Google Developer Students Club
                </li>
                <li>
                    To conduct research and write articles for publication on emerging
technological and computing issues and trends with a view of
getting possible solutions to the prevailing and the rapid growing
technological world.
                </li>
               </ol>
              </section>
  
      </div>
    
        </>
    )
}