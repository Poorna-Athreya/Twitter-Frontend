import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import AllUsersPage from './index';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));

const mockMakeRequest = () => ({
  users: [
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
    }],
});
jest.mock('../../utils/makeRequest/', () => () => {
  const response = mockMakeRequest();
  return Promise.resolve(response);
});

describe('AllUsersPage', () => {
  it('should take a snapshot of AllUsersPage', () => {
    const { asFragment } = render(<AllUsersPage />);
    expect(asFragment(<AllUsersPage />)).toMatchSnapshot();
  });
  it('should render all the user details when the page is loaded', async () => {
    render(<AllUsersPage />);
    expect(await screen.findAllByText('Twitter Dev')).toBeTruthy();
    expect(await screen.findAllByText('@TwitterDev')).toBeTruthy();
    expect(await screen.findAllByText('Internet')).toBeTruthy();
    expect(await screen.findAllByText('Lorem Ipsum')).toBeTruthy();
    expect(await screen.findAllByText('@LoremIpsum')).toBeTruthy();
  });
});
