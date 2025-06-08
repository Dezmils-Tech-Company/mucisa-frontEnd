import React from 'react';
import '../styles/confirmation.css';
const Confirmation = ({ prevStep, formData, handleSubmit }) => {
  return (
    <div>
      <h2>Confirm Your Details</h2>
      <p>Please review your information before submitting.</p>
      <h3>Personal Information</h3>
     <strong>Name: </strong> {formData.personal.firstName} {formData.personal.middleName} {formData.personal.lastName}<br />
     <strong> Telephone: </strong> {formData.personal.telephone}<br />
     <strong>Email:</strong> {formData.personal.email}<br />
      <h3>Faculty Information</h3>
       <strong>Admission Number:</strong> {formData.faculty.admNumber}<br />
     <strong> Faculty:</strong> {formData.faculty.Faculty}<br />
      <strong>Course:</strong> {formData.faculty.course}<br />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Confirmation;