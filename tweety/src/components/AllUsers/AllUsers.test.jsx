import { render, screen } from '@testing-library/react';
import React from 'react';
import AllUsers from './index';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));

const mockAllUsers = [
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
  }];

describe('AllUsers', () => {
  it('should take a snapshot for AllUsers', () => {
    const { asFragment } = render(<AllUsers allUsers={mockAllUsers} />);
    expect(asFragment(<AllUsers allUsers={mockAllUsers} />)).toMatchSnapshot();
  });
  it('should render all the user cards when AllUsers is rendered', async () => {
    render(<AllUsers allUsers={mockAllUsers} />);
    expect(await screen.findAllByText('Twitter Dev')).toBeTruthy();
    expect(await screen.findAllByText('@TwitterDev')).toBeTruthy();
    expect(await screen.findAllByText('Internet')).toBeTruthy();
    expect(await screen.findAllByText('Lorem Ipsum')).toBeTruthy();
    expect(await screen.findAllByText('@LoremIpsum')).toBeTruthy();
  });
});
