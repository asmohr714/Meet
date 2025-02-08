/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// src/__tests__/App.test.js
import { render } from '@testing-library/react';
import React from 'react';
import App from './../App';

// Tests for App component -- test outcome of render first before each component test

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  // Test for list of events

    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
      });

  // Test for CitySearch

      test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
        });


});