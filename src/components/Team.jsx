import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {SiX} from 'react-icons/si'
import '../CSS-styling/Team.css';
import dd from '../assets/dd.png'
import hhh from '../assets/hhh.jpg'
import Faima from '../assets/Faima.jpg'
import mutua from '../assets/mutua.jpg'
import Nickson from '../assets/Nickson.jpg'
import prince from '../assets/prince.jpg'
import jewel from '../assets/jewel.jpg'
import wairimu from '../assets/wairimu.jpg'
import George from '../assets/George.jpg'
import joel from '../assets/joel.jpg'
import terry from '../assets/terry.jpg'
import sege from '../assets/sege.jpg'



const teamMembers = [
  {
    name: 'Faith Nyambura',
    role: 'Chairperson',
    photo: Faima,
     socials: [
      { icon: <FaFacebookF />, label: 'Facebook', url: '#' },
      { icon: <SiX />, label: 'Twitter', url: '#' },
      { icon: <FaLinkedin />, label: 'Chat', url: '#' },
      { icon: <FaInstagram/>, label: 'Chat', url: '#' }
    ],
  },
  {
    name: 'Nickson Nyaore',
    role: 'Vice Chairperson',
    photo: Nickson,
     socials: [
      { icon: <FaFacebookF />, label: 'Facebook', url: '#' },
      { icon: <SiX />, label: 'Twitter', url: 'https://x.com/nickChester10?s=09' },
      { icon: <FaLinkedin />, label: 'Chat', url: '#' },
      { icon: <FaInstagram/>, label: 'Chat', url: '#' }
    ],
  },
  {
    name: 'Faith Wairimu',
    role: 'Secretary General',
    photo: wairimu,
     socials: [
      { icon: <FaFacebookF />, label: 'Facebook', url: '#' },
      { icon: <SiX />, label: 'Twitter', url: '#' },
      { icon: <FaLinkedin/>, label: 'Chat', url: '#' },
      { icon: <FaInstagram/>, label: 'Chat', url: '#' }
    ],
  },{
    name: 'George Bryzon',
    role: 'Treasurer',
    photo: George,
     socials: [
      { icon: <FaFacebookF />, label: 'Facebook', url: '#' },
      { icon: <SiX />, label: 'Twitter', url: '#' },
      { icon: <FaLinkedin />, label: 'Chat', url: '#' },
      { icon: <FaInstagram/>, label: 'Chat', url: '#' }
    ],
  }
  ,
  {
    name: 'Musembi Mutua',
    role: 'Org. Secretary',
    photo: mutua,
     socials: [
      { icon: <FaFacebookF />, label: 'Facebook', url: 'https://www.facebook.com/share/1ELsHQ9Bz9/' },
      { icon: <SiX />, label: 'Twitter', url: 'https://x.com/musembimut25117?t=fR80Pa4-_JWUWEKgl4OFUw&s=09' },
      { icon: <FaLinkedin />, label: 'Chat', url: 'https://www.linkedin.com/in/musembi-mutua-921b102a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { icon: <FaInstagram/>, label: 'Chat', url: '#' }
    ],
  }
  ,
  {
    name: 'Joel Otachi',
    role: 'School Rep',
    photo: joel,
     socials: [
      { icon: <FaFacebookF />, label: 'Facebook', url: '#' },
      { icon: <SiX />, label: 'Twitter', url: '#' },
      { icon: <FaLinkedin />, label: 'Chat', url: '#' },
      { icon: <FaInstagram/>, label: 'Chat', url: '#' }
    ],
  }
  ,
  {
    name: 'Prince Williams',
    role: 'Event Organizer',
    photo: prince,
     socials: [
      { icon: <FaFacebookF />, label: 'Facebook', url: '#' },
      { icon: <SiX />, label: 'Twitter', url: '#' },
      { icon: <FaLinkedin />, label: 'Chat', url: '#' },
      { icon: <FaInstagram/>, label: 'Chat', url: '#' }
    ],
  },
  {
    name: 'Dezmils Ezra',
    role: 'TMC representative',
    photo: dd,
     socials: [
      { icon: <FaFacebookF />, label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61551077543227' },
      { icon: <SiX />, label: 'Twitter', url: 'https://x.com/dez_ezra?t=u5AyR9IHt0LaB84-_kOluw&s=09' },
      { icon: <FaLinkedin />, label: 'Chat', url: 'https://www.linkedin.com/in/ezra-ndege-578906317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { icon: <FaInstagram/>, label: 'Chat', url: '#' }
    ],
  },
  {
    name: 'Jewel Visenwa',
    role: 'CCT Representative',
    photo: jewel,
     socials: [
      { icon: <FaFacebookF />, label: 'Facebook', url: '#' },
      { icon: <SiX />, label: 'Twitter', url: '#' },
      { icon: <FaLinkedin />, label: 'Chat', url: '#' },
      { icon: <FaInstagram/>, label: 'Chat', url: '#' }
    ],
  },
  
  {
    name: 'Terry Peters',
    role: 'ICTM Representative',
    photo: terry,
     socials: [
      { icon: <FaFacebookF />, label: 'Facebook', url: '#' },
      { icon: <SiX />, label: 'Twitter', url: '#' },
      { icon: <FaLinkedin />, label: 'Chat', url: '#' },
      { icon: <FaInstagram/>, label: 'Chat', url: '#' }
    ],
  },
  {
    name: ' Peter sege',
    role: 'Editor General',
    photo: sege,
     socials: [
      { icon: <FaFacebookF />, label: 'Facebook', url: '#' },
      { icon: <SiX />, label: 'Twitter', url: '#' },
      { icon: <FaLinkedin />, label: 'Chat', url: '#' },
      { icon: <FaInstagram/>, label: 'Chat', url: '#' }
    ],
  },
  // Add more members as needed
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            className="team-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <span className="team-card__socials">
                  {member.socials.map(({ icon, label, url }, idx) => (
                    <a
                      key={idx}
                      href={url}
                      aria-label={label}
                      className="team-card__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                    </a>
                  ))}
                </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
