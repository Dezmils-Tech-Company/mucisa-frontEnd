import '../CSS-styling/JoinSection.css';
import { useNavigate } from 'react-router-dom';

const JoinSection = () => {
  const navigate = useNavigate();
  return (
    <section className="join-container">
      <h2>Get Involved with MUCISA</h2>
      <div className="join-options">
        <div className="join-card">
          <h3>Become a Member</h3>
          <p>Join as a student to engage in tech events, training, and collaborative innovation.</p>
          <button onClick={()=>navigate( '/register')}>Apply Now</button>
        </div>
        <div className="join-card">
          <h3>Become a Sponsor</h3>
          <p>Support MUCISA initiatives and impact the future of innovation and tech communities.</p>
          <button>Partner With Us</button>
        </div>
        <div className="join-card">
          <h3>Become a Mentor</h3>
          <p>Launch a Mentorship program with us. we welcome any tech related mentorship program</p>
          <button>Start now</button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
