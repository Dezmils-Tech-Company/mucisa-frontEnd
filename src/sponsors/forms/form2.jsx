import React, { useState } from 'react';
import '../styles/Step1.css';

const Step2 = ({ nextStep, handleDataChange, prevStep }) => {
  const [localData, setLocalData] = useState({
    Faculty: '',
    course: '',
    yearOfStudy: '',
    admNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setLocalData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field on change
    if (errors[name]) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!localData.course.trim()) newErrors.course = 'Your Course is required .';
    if (!localData.yearOfStudy.trim()) newErrors.yearOfStudy = 'Year of study is required.';
    if (!localData.admNumber.trim()) newErrors.admNumber = 'Adm No is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = e => {
    e.preventDefault();

    if (validate()) {
      handleDataChange('faculty', localData);
      nextStep();
    }
  };

  const handlePrev = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <h2>Faculty Information</h2>
      <p>Please provide your faculty details. All Fields Marked with * are required</p>
      <br />
      <form className="form-grid" onSubmit={handleNext} noValidate>
        <div>
          <label>
            Faculty/School
          </label>
          <input
            name="Faculty"
            placeholder="e.g., School of Mathematics"
            onChange={handleChange}
            value={localData.Faculty}
            className={errors.Faculty ? 'input-error' : ''}
          />
          
        </div>

        <div>
            
          <label>Your Course of Study<span style={{ color: 'red' }}>*</span></label>
          <input
            name="course"
            placeholder="Course of study"
            onChange={handleChange}
            value={localData.course}
            className={errors.course ? 'input-error' : ''}
          />
          {errors.course && <em className="error-message">{errors.course}</em>}
        </div>

        <div>
          <label>
            Your Current Year of Study <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            name="yearOfStudy"
            placeholder="Year of Study"
            onChange={handleChange}
            value={localData.yearOfStudy}
            className={errors.yearOfStudy ? 'input-error' : ''}
          />
          {errors.yearOfStudy && <em className="error-message">{errors.yearOfStudy}</em>}
        </div>

        <div>
          <label>
            Your Admission Number <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            name="admNumber"
            placeholder="e.g., TMC/00004/023"
            onChange={handleChange}
            value={localData.admNumber}
            className={errors.admNumber ? 'input-error' : ''}
          />
          {errors.admNumber && <em className="error-message">{errors.admNumber}</em>}
        </div>
      </form>

      <div className="buttons">
        <button onClick={handlePrev} type="button">
          Back
        </button>
        <button onClick={handleNext} type="submit">
          Next
        </button>
      </div>
    </>
  );
};

export default Step2;
