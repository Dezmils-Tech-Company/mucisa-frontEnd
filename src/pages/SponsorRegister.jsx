import { useState } from 'react';
import '../CSS-styling/Register.css';
import Swal from 'sweetalert2';
import Step1 from '../sponsors/forms/form1.jsx';
import Step2 from '../sponsors/forms/form2.jsx';
import Step3 from '../sponsors/forms/form3.jsx';
import Confirmation from '../sponsors/forms/Confirmation.jsx';
import ProgressBar from '../sponsors/ProgressBar.jsx';

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
      {step === 3 && <Confirmation prevStep={prevStep} formData={formData} handleSubmit={handleSubmit} />}
    </div>
  );
}

export default Register;