/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

// src/App.jsx

import React, { useState } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';


const App = () => {

  const [numberOfEvents, setNumberOfEvents] = useState(32);

  return (
    <div className="App">
      <EventList />
      <CitySearch />
      <NumberOfEvents numberOfEvents={numberOfEvents} setNumberOfEvents={setNumberOfEvents}/>
    </div>
  );
}

export default App;
