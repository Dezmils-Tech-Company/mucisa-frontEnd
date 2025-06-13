// Assuming you have the necessary imports and component setup from your original code

import React, { useState } from 'react';
import '../CSS-styling/Register.css';
import Swal from 'sweetalert2';
import Step1 from '../registration/steps/step1.jsx';
import Step2 from '../registration/steps/step2.jsx';
import Step3 from '../registration/steps/step3.jsx';
import Step4 from '../registration/steps/step4.jsx';
import Confirmation from '../registration/steps/Confirmation.jsx';
import ProgressBar from '../registration/ProgressBar.jsx';
import emailjs from '@emailjs/browser';

function Register() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: {},
    faculty: {},
    tech: {},
    involvement: {},
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleDataChange = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  const sendEmails = async () => {
    try {
      // 1. Get the applicant's email
      const applicantEmail = formData.personal.email;

      if (!applicantEmail) {
        console.warn("Applicant email not found in form data. Cannot send email.");
        return;
      }

      // 2. Prepare EmailJS parameters
      const emailParams = {
        to_email: applicantEmail,  // Use applicant's email
        first_name: formData.personal.firstName || 'User', // Safe default
        last_name:formData.personal.lastName,
         course: formData.faculty.course || 'Not specified',
        adm: formData.faculty.admNumber || 'Not specified',
        phoneNumber: formData.personal.telephone || 'Not specified',
      };

      // 3. Send auto-reply using EmailJS
      await emailjs.send(
        'service_ex2j4bm',
        'template_hy1j2e2', // Replace with your Auto-Reply Template ID
        emailParams,
        '_wm3KswFnZELfE6pw'
      );
      console.log("Email sent successfully to " + applicantEmail)

    } catch (error) {
      console.error('Error sending emails:', error);
      //  Show an error to the user is generally not advised
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('https://mucisa-maseno-university.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your Application Has been successfully submitted. You will receive a confirmation email shortly.',
        });

        // Reset form
        setStep(0);
        setFormData({
          personal: {},
          faculty: {},
          tech: {},
          involvement: {},
        });

        // Send emails after successful submission
        await sendEmails();

      } else {
        if (formData.field === 'email') {
          Swal.fire({
            icon: 'error',
            title: 'Duplication Error',
            text: 'Email Already Exists. Kindly wait for your Affiliation',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An Error Occurred during submission: ' + (result.errors?.join(', ') || result.error || 'Please try again later'),
          });
          // Reset form
          setStep(0);
          setFormData({
            personal: {},
            faculty: {},
            tech: {},
            involvement: {},
          });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Connection Error',
        text: 'Could not connect to the server. Please check your internet connection and try again.',
      });
    }
  };

  return (
    <div className="registration-form-container">
      <ProgressBar step={step} />
      {step === 0 && <Step1 nextStep={nextStep} handleDataChange={handleDataChange} />}
      {step === 1 && <Step2 nextStep={nextStep} prevStep={prevStep} handleDataChange={handleDataChange} />}
      {step === 2 && <Step3 nextStep={nextStep} prevStep={prevStep} handleDataChange={handleDataChange} />}
      {step === 3 && <Step4 nextStep={nextStep} prevStep={prevStep} handleDataChange={handleDataChange} />}
      {step === 4 && <Confirmation prevStep={prevStep} formData={formData} handleSubmit={handleSubmit} />}
    </div>
  );
}

export default Register;
