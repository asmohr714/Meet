/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';

const App = () => {
  return (
    <div className="App">
      <EventList />
      <CitySearch />
    </div>
  );
}

export default App;
