import React, { useState } from 'react';
import '../styles/Step1.css';

 const Step3 = ({ nextStep, handleDataChange,prevStep  }) => {
  const [localData, setLocalData] = useState({
    Language: '',
   Tool: '',
    stack: '',
    Skill: '',
    GitHub: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setLocalData(prev => ({ ...prev, [name]: value }));
  };

 const handleNext = (e) => {
  e.preventDefault(); // Prevents page reload
  handleDataChange('tech', localData); // Send data to parent
  nextStep(); // Move to the next step
};
const handlePrev = (e) => {
  e.preventDefault(); // Prevents page reload
  prevStep(); // Move to the prev step
};


 
  return (
     
    <>
    <h2>Tech Stack Information</h2>
        <p>please fill all fields correctly. This will help us locate you when opportunities arise. If you are not Familliar indicate it on the next page</p>
        <br />
    <form className="form-grid" onSubmit={handleNext}>
        <div>
          <label>List Your Favourite Programming Languages</label>
            <input name="Language" placeholder="eg., python,java,php..." onChange={handleChange} />
         </div>
         <div>
          <label>List Your Favourite Development tools</label>
            <input name="Tool" placeholder="eg., Doker,Kubernets,React..." onChange={handleChange} />
         </div>
         
        <div>
           <label>Your area of Specialization</label>
           <select name="stack" onChange={handleChange} required>
                <option value="">Select your stack</option>
                <option value="frontEnd">WEB Front End</option>
                <option value="backEnd">WEB Back End</option>
                <option value="Data Science">Data Science</option>
                <option value="AI">AI and Machine Learning</option>
                <option value="Cyber security">Cyber Securty</option>
                <option value="Cloud Computing">Cloud computing</option>
            </select>
         </div>
        <div>
           <label>Your Skill Level</label>
           <select name="Skill" onChange={handleChange} required>
                <option value="">Select Skill Level</option>
                <option value="Beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
         </div> 
        <div>
           <label>Your GitHub Account</label>
             <input type='url' name="GitHub" placeholder="eg., https://github.com/username" onChange={handleChange} /> 
         </div> 
     
    </form>
    <div className='buttons'>
         <button onClick= {handlePrev}>Back</button>
         <button onClick= {handleNext}>Next</button>
     </div>
     </>
  );
};

export default Step3;