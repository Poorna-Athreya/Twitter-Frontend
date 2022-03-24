import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import AllUsers from './index';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));

const mockMakeRequest = () => ([
  {
    id: 110,
    name: 'Twitter Dev',
    handle: 'TwitterDev',
    location: 'Internet',
  },
  {
    id: 111,
    name: 'Lorem Ipsum',
    handle: 'LoremIpsum',
    location: 'Internet',
  }]);

const mockSetAllUsers = jest.fn();
// .mock('React', () => ({ useState: () => () => ([mockMakeRequest(), mockSetAllUsers]) }));

jest.mock('../../utils/makeRequest/', () => () => {
  const response = mockMakeRequest();
  return Promise.resolve(response);
});

describe('AllUsers', () => {
  xit('should render all the user cards when AllUsers is rendered', () => {
    render(<AllUsers />);
  });
});
