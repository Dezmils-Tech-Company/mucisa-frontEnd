  import React from 'react';
   import '../CSS-styling/contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
     const Contact = () => {
       const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ex2j4bm', 'template_p7ovwsa', form.current, '_wm3KswFnZELfE6pw')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to sent.');
      });

    e.target.reset();
  };

  return (
    <div className="container">
    <form ref={form} onSubmit={sendEmail} className="form">
      <input className="input" type="text" name="name" placeholder="Your Name" required />
 <input  className="input" type="email" name="email" placeholder="Your Email" required />
      <textarea className="input"  name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
    </div>
  );
}

     export default Contact;