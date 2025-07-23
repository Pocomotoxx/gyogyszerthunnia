import React from 'react';

const TherapyEventItem = ({ event }) => {
  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default TherapyEventItem;
