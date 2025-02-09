/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// src/components/Event.jsx

import React, { useState } from 'react';
import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    test('has number of events', () => {
        const NumberOfEventsComponent = render(<NumberOfEvents />);
        expect(NumberOfEventsComponent.queryByRole("input")).toBeInTheDocument();
    });
});