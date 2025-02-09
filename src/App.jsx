/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

// src/App.jsx

import React from 'react';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';


const App = () => {

  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <EventList events={events} />
      <CitySearch allLocations={allLocations} />
      <NumberOfEvents />
    </div>
  );
}

export default App;