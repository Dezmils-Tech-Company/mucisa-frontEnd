 import { useState } from 'react';
import '../CSS-styling/Register.css';
import Swal from'sweetalert2';
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

  const handleSubmit = async () => {
    try {
      const res = await fetch('https://mucisa-maseno-university.onrender.com/api/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
     
      const result=await res.json();

      if (res.ok) {
        // Send auto-reply to applicant
      await emailjs.send(
        'service_ex2j4bm', // Same service ID
        'template_hy1j2e2',
        formData,
        '_wm3KswFnZELfE6pw' // Same user ID
      );
        Swal.fire({
          icon:'success',
          title:'Success',
          text:'Your Application Has been successfully submitted wait for aproval Email',
        });
        setStep (0); // Reset to step 0 after successful submission
        setFormData({
          personal: {},
          faculty: {},
          tech: {},
          involvement: {},
        });
      } else {
        Swal.fire({
          icon:'error',
          title:'..oops',
          text:'An Error Occured during submission' + result.errors?.join(', ') || result.error,
        });

      }
    } catch (error) {
      console.error('Error submitting form:', error);
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

