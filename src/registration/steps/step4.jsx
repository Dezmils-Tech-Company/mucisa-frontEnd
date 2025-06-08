import React, { useState } from 'react';
import '../styles/Step1.css';

 const Step4 = ({ nextStep, handleDataChange,prevStep  }) => {
  const [localData, setLocalData] = useState({
    reason: '',
    Expectations: '',
    Time: '',
    source: '',
    community: '',
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
    <h2>Involvement Preference</h2>
        <p>How could you like to get involved in Mucisa.All fields marked * are required</p>
        <br />
    <form className="form-grid" onSubmit={handleNext}>
        <div>
          <label>Reason for Application:</label>
      <textarea
        name="reason"
        onChange={handleChange}
        rows="3"
        placeholder="Tell us why you want to join MUCISA..."
      />
         </div>
         <div>
          <label>What Are Youe Expectations After Joining MUCISA</label>
            <textarea
        name="Expectations"
        onChange={handleChange}
        rows="3"
        placeholder="What Are You Excited About Joining Mucisa..."
      />
         
         </div>
         
        <div>
           <label>How many Hours Aweek are you willing to dedicate for Tech involvement</label>
           <select name="Time" onChange={handleChange} required>
                <option value="">Select </option>
                <option value="5hrs">3hrs-5hrs</option>
                <option value="7hrs">5hrs to 8hrs</option>
                <option value="10hrs">10hrs -15hrs</option>
                <option value="15hrs">15hrs - 20hrs</option>
                <option value="Flexible">As long as Im Available</option>
                
            </select>
         </div>
        <div>
            <label>How did you hear about MUCISA?</label>
           <select name="source" onChange={handleChange} required>
                <option value="">Select Source</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend">Friend</option>
                <option value="Event">Event</option>
                <option value="Website">Website</option>
                <option value="Other">Other</option>
            </select>
         </div> 
        <div>
            <label>Are you a member of any other Tech Community?</label>
           <select name="community" onChange={handleChange} required>
                <option value="">Select Community</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
         </div>
     
    </form>
    <div className='buttons'>
         <button onClick= {handlePrev}>Back</button>
         <button onClick= {handleNext}>Next</button>
     </div>
     </>
  );
};

export default Step4;