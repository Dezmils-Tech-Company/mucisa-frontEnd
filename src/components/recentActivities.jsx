import '../CSS-styling/recentActivities.css';
import gala1 from '../assets/gala1.jpg'
import gala2 from '../assets/gala2.jpg'
import gala3 from '../assets/gala3.jpg'
import gala4 from '../assets/gala4.jpg'
import gala5 from '../assets/gala5.jpg'
import gala6 from '../assets/gala6.jpg'
import wrric1 from '../assets/wrric1.jpeg'
import wrric2 from '../assets/wrric2.jpeg'
import wrric3 from '../assets/wrric3.jpeg'
import wrric4 from '../assets/wrric4.jpeg'
import wrric5 from '../assets/wrric5.jpeg'
import hack1 from '../assets/hack1.jpeg'
import hack2 from '../assets/hack2.jpeg'
import hack3 from '../assets/hack3.jpeg'
import hack4 from '../assets/hack4.jpeg'
import hack5 from '../assets/hack5.jpeg'




const activities = [
  {
    title: "TechVibe Gala",
    description: "A dazzling premiere of MUCISAs farewell tradition, held in honor of our trailblazing fourth-year legends. Elegance met energy as the evening unfolded with breathtaking ambience, stylish attires, and heartfelt toasts.From dance challenges, to a thrilling Best Couple competition that had everyone on the edge of their seats, the night was packed with laughter, joy, and unforgettable memories. Overflowing plates, endless selfies, and pure vibes made TechVibe not just an event, but an experience — the perfect blend of celebration, emotion, and unfiltered MUCISA magic. ",
    images: [
      gala1,
      gala2,
      gala3,
      gala4,
      gala5,
      gala6,
    ]
  },
  {
    title: "Mucisa Hackathon 2025",
    description: " held on March 8th — was a groundbreaking tech marathon that lit the spark of innovation across Maseno! For many MUCISA members, it was their first real dive into the world of hackathons, and the impact was nothing short of electric.The day was filled with tech vibes, fast-paced collaboration, and eye-opening mentorship. From ideation to building real-time solutions, teams brought their A-game with jaw-dropping projects. Farm AI by Enactus tackled smart agriculture, Edyfra by Team Edyfra reimagined education access, while Unicare by Team Cecil impressed with a healthcare-focused innovation. It was more than coding — it was a culture shift. For many, this was the moment they truly saw the power of tech to solve real problems.",
    images: [
        hack5,
        hack1,
        hack2,
        hack3,
        hack4,
   
    ]
  },
  {
    title: "WRRIC 1st Edition hackathon",
    description: "  We have been able to excell in may of our activities, a Major highlight of the WRRIC 1st Edition Multidisciplinary HackathonHeld At Kisii University where we were able to emerge the winners in innovations and smart solutions, proudly presentent by our strong Teams Edyfra and the Enarctus KenyaTeams.",
    images: [
      wrric1,
        wrric2,
        wrric3,
        wrric5,
        wrric4,

    ]
  }
];


const RecentActivities = () => {
  return (
    <div className="activities-wrapper">
        <h2 className="section-title">Recent Activities</h2>
      {activities.map((activity, index) => (
        <div key={index} className="activity-block">
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
          <div className="masonry-gallery">
            {activity.images.map((img, i) => (
              <img key={i} src={img} alt="about" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;