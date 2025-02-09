/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// src/components/CitySearch.jsx
import React, { useState, useEffect } from 'react';

// CitySearch component with input field and suggestions list

const CitySearch = ({ allLocations, setCurrentCity }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
      setSuggestions(allLocations);
    }, [`${allLocations}`]);

// Obtain current value of the input field, fillter allLocations, set the Query state to inut value
// and set the suggestions state to the filtered locations

    const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }) : [];
    
        setQuery(value);
        setSuggestions(filteredLocations);
      };

// Handle the click event on the suggestions list, set the Query state to the clicked item and hide the list

    const handleItemClicked = (event) => {
     const value = event.target.textContent;
     setQuery(value);
      setShowSuggestions(false);
      setCurrentCity(value);
    };

// UI returned for the CitySearch component

    return (
      <div id="city-search">
        <input
            type="text"
            className="city"
            placeholder="Search for a city"
            value={query}
            onFocus={() => setShowSuggestions(true)}
            onChange={handleInputChanged}
        />
        {showSuggestions ?
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
          })}
          <li key='See all cities' onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
        : null
      }
      </div>
    )
  }
  
  
  export default CitySearch;