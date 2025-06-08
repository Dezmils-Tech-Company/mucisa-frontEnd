import React from 'react';
import '../CSS-styling/loader.css';
import logo from '../assets/logo.png'; 

export default function Loader() {
  return (
    <>
    <div className="loader-container">
      <img src={logo} alt="Loading..." className="spinning-logo" />
      <p>Loading.....</p>
    </div>
    </>

  );
};

// This component displays a loading spinner with a logo and a loading message.