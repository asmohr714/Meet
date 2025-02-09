/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// src/components/Event.jsx
import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { summary, location, description, created } = event;

  return (
    <li key={event.id} role="listItem">
      <h2 id="summary">{summary}</h2>
      <p id="event-start">{created}</p>
      <p id="event-location">{location}</p>
      <button id="show-hid-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails &&
          <p id="event-description" data-testid="event-description">{description}</p>}
    </li>
  );
}


export default Event;