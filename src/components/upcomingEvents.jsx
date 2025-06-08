import React from 'react';
import '../CSS-styling/upcomingEvents.css';



// Helper function: format date to { month, day }
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: 'short' };
  return {
    month: date.toLocaleDateString(undefined, options),
    day: date.getDate(),
  };
};

const eventsData = [
  {
    id: 1,
    date: '2025-05-18',
    startTime: '14:00',
    endTime: '17:00',
    venue: 'Amphitheatre Maseno university',
    description: 'Join us for an exciting AI summit that will last for 3 days. we will learn on how AI impacts politics and social life.',
  },
  {
    id: 2,
    date: '2025-07-22',
    startTime: '08:00',
    endTime: '16:00',
    venue: 'Maseno Market',
    description: 'Outdoor Market cleaning and local sensitiztion.',
  },
  
];

const UpcomingEvents = () => {
  return (
    <section className="events-section" aria-label="Upcoming Events">
      <h2 className="events-section__title">Upcoming Events</h2>
      <div className="events-list">
        {eventsData.map(({ id, date, startTime, endTime, venue, description }) => {
          const { month, day } = formatDate(date);
          return (
            <article key={id} className="event-card" tabIndex="0" aria-labelledby={`event-title-${id}`}>
              <div className="event-date" aria-label={`Date: ${month} ${day}`}>
                <div className="event-date__month">{month}</div>
                <div className="event-date__day">{day}</div>
              </div>
              <div className="event-details">
                <div className="event-time-venue">
                    <span>|</span>
                  <time dateTime={`${date}T${startTime}`} aria-label={`Starts at ${startTime}`}>
                    {startTime}
                  </time>
                  <span>–</span>
                  <time dateTime={`${date}T${endTime}`} aria-label={`Ends at ${endTime}`}>
                    {endTime}
                  </time>
                  <span> | {venue}</span>
                </div>
                <p id={`event-title-${id}`} className="event-description">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingEvents;
