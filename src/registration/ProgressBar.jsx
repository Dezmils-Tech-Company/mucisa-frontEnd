import React from 'react';
import './styles/progress.css';
import {FaCheck, FaGraduationCap, FaLaptop, FaNotesMedical, FaUser} from 'react-icons/fa'

const steps = [
  { icon: <FaUser/>, label: 'Personal Info' },
  { icon: <FaGraduationCap/>, label: 'Faculty' },
  { icon: <FaLaptop/>, label: 'Tech Stack' },
  { icon: <FaNotesMedical/>, label: 'Involvement' },
  { icon: <FaCheck/>, label: 'Confirm' },
];

const ProgressBar = ({ step }) => {
  return (
    <div className="progressbar">
      {steps.map((s, index) => {
        let className = 'progress-step';
        if (index === step) className += ' active';
        else if (index < step) className += ' completed';
        return(
          <div key={index} className={className}>
            <div className="step-icon">{s.icon}</div>
            <div className="step-label">{s.label}</div>
            {index < steps.length - 1 && <div className="step-bar"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;