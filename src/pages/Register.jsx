import { useState } from 'react';
import '../CSS-styling/Register.css';
import Swal from 'sweetalert2';
import Step1 from '../registration/steps/step1';
import Step2 from '../registration/steps/step2';
import Step3 from '../registration/steps/step3';
import Step4 from '../registration/steps/step4';
import Confirmation from '../registration/steps/Confirmation';
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
      // Prepare data for emails
      const emailData = {
        ...formData.personal,
        ...formData.faculty,
        application_date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };

      // Send auto-reply to applicant
      await emailjs.send(
        'service_ex2j4bm',
        'template_hy1j2e2', // This should be your auto-reply template
        emailData,
        '_wm3KswFnZELfE6pw'
      );
    } catch (error) {
      console.error('Error sending emails:', error);
      // Don't show error to user as the main submission was successful
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
        // Send emails after successful submission
        await sendEmails();
       
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
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An Error Occurred during submission: ' + (result.errors?.join(', ') || result.error || 'Please try again later'),
        });
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