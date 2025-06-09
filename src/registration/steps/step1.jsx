import React, { useState } from 'react';
import '../styles/Step1.css';

const Step1 = ({ nextStep, handleDataChange }) => {
  const [localData, setLocalData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    telephone: '',
    email: '',
    gender: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = e => {
    const { name, value } = e.target;
    setLocalData(prev => ({ ...prev, [name]: value }));

    // Remove error as user types
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

    // Required fields validation
    if (!localData.firstName.trim()) newErrors.firstName = 'First name is required.';
  if (!localData.lastName.trim()) newErrors.lastName = 'Last name is required.';
  if (!localData.telephone.trim()) newErrors.telephone = 'Telephone number is required.';
  if (!localData.email.trim()) newErrors.email = 'Email is required.';
  if (!localData.gender.trim()) newErrors.gender = 'Gender is required.';
  if (!localData.dateOfBirth.trim()) newErrors.dateOfBirth = 'Date of birth is required.';
    // Telephone number validation (simple check for digits)
    if (localData.telephone && !/^\d+$/.test(localData.telephone)) {newErrors.telephone = 'Please input a valid Phone Number'; }

    // Email format validation (simple)
    if (localData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localData.email)) {
      
    newErrors.email = 'Please enter a valid email address.';
    }
    
    // Date of birth validation: no future dates, at least 18 years old
    if (localData.dateOfBirth) {
      const dob = new Date(localData.dateOfBirth);
      const today = new Date();
      const ageDifMs = today - dob;
      const ageDate = new Date(ageDifMs);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);

if (dob > today) {
      newErrors.dateOfBirth = 'Date of birth cannot be in the future.';
    } else if (age < 18) {
      newErrors.dateOfBirth = 'Kindly Input A valid Date of Birth';
    }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = e => {
    e.preventDefault();

    if (validate()) {
      handleDataChange('personal', localData);
      nextStep();
    }
  };

  return (
    <>
      <h2>Personal Information</h2>
      <p>
        Please provide your basic personal details. Fill accurately for you to win a chance of joining us
      </p>
      <br />
      <form className="form-grid" onSubmit={handleNext} noValidate>
        <div>
          <label>
            First Name <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={localData.firstName}
            className={errors.firstName ? 'input-error' : ''}
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        </div>

        <div>
          <label>Middle Name</label>
          <input
            name="middleName"
            placeholder="Middle Name"
            onChange={handleChange}
            value={localData.middleName}
          />
        </div>

        <div>
          <label>
            Last Name <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={localData.lastName}
            className={errors.lastName ? 'input-error' : ''}
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </div>

        <div>
          <label>
            Telephone Number <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            name="telephone"
            placeholder="Telephone (Safaricom only)"
            onChange={handleChange}
            value={localData.telephone}
            className={errors.telephone ? 'input-error' : ''}
          />
          {errors.telephone && <p className="error-message">{errors.telephone}</p>}
        </div>

        <div>
          <label>
            Email <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="name@domain"
            onChange={handleChange}
            value={localData.email}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div>
          <label>
            Gender <span style={{ color: 'red' }}>*</span>
          </label>
          <select
            name="gender"
            onChange={handleChange}
            value={localData.gender}
            className={errors.gender ? 'input-error' : ''}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Rather not specify</option>
          </select>
        </div>

        <div>
          <label>
            Date Of Birth <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            name="dateOfBirth"
            type="date"
            onChange={handleChange}
            value={localData.dateOfBirth}
            className={errors.dateOfBirth ? 'input-error' : ''}
          />
          {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth}</p>}
        </div>
      </form>

      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Step1;
