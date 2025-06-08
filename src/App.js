// src/App.js

import React from "react";
import {
    HashRouter as Router,Routes, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/contact.jsx"
import SupportPage from "./pages/support.jsx"
import Team from './components/Team.jsx';
import Programs from './components/programs.jsx';
import Hackathons from "./components/hackathons.jsx";
import Loader from "./components/Loader";
import Register from "./pages/Register.jsx"
import { AiFillPhone } from "react-icons/ai";




const Company = () => <h2>No Confirmed Partner Yet!</h2>;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    const handleScroll = () => {
 setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) return <Loader />

    return (
        <Router>
          <header className= {isScrolled ? "header scrolled" : "header"}>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> <FaHome/> Home</Link>
                    </li>
                    <li>
                        <Link to="/about"><FaInfoCircle/> About</Link>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact <AiFillPhone/></Link>
                    </li>
                </ul>
            </nav>
          </header>
            {/*Implementing Routes for respective Path */}
          <div className="content"> 
            <Routes>
                <Route path="/" element={<Home />} >
                </Route>
                <Route path="/about" element={<About />}>
                    <Route path="team" element={<Team />} />
                    <Route path="company" element={<Company />} />
                </Route>
                <Route path="programs" element={<Programs/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="hackathon" element={<Hackathons />} />
                <Route path="support" element={<SupportPage/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
          </div>   
         
        </Router>
        
    );
}

export default App;