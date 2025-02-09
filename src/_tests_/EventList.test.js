/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// src/__tests__/EventList.test.js

import React from 'react';
import { render, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from '../App';

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
expect(EventListComponent.getAllByRole("listItem")).toHaveLength(allEvents.length);
});
});

describe('<EventList /> integration', () => {

  test('renders a list of 32 events when the app is mounted and rendered', async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector('#event-list');
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listItem');
      expect(EventListItems.length).toBe(32);
    });
  });
});