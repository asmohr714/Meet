/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// src/__tests__/EventList.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';

// Tests for the EventList component -- test render first before each test

describe('<EventList /> component', () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  })

// Test that event list is a list element

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

// Test for correct number of events within the event list

test('renders correct number of events', async () => {
  const allEvents = await getEvents(); 
  EventListComponent.rerender(<EventList events={allEvents} />);
expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
});
});