/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from './index';
import { TWEETS_ROUTE, USERS_ROUTE } from '../../constants/routes';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));

describe('UserCard', () => {
  const mockUserCardName = 'Jane Doe';
  const mockUserCardHandle = 'JaneDoe';
  const mockUserCardLocation = 'Internet';
  const mockUserCardId = 2;
  beforeEach(() => {
    render(<UserCard userName={mockUserCardName} userHandle={mockUserCardHandle} location={mockUserCardLocation} id={mockUserCardId} />);
  });
  it('should have the required elements when UserCard is rendered', () => {
    expect(screen.getByTestId('userCardName')).toBeTruthy();
    expect(screen.getByText(mockUserCardName)).toBeTruthy();
    expect(screen.queryByTestId('userCardHandle')).toBeTruthy();
    expect(screen.getByText(`@${mockUserCardHandle}`)).toBeTruthy();
    expect(screen.queryByTestId('userCardLocation')).toBeTruthy();
    expect(screen.getByText(mockUserCardLocation)).toBeTruthy();
    expect(screen.queryByTestId('userCardButton')).toBeTruthy();
  });
  it('should call mockNavigate function when the button is clicked', () => {
    fireEvent.click(screen.getByTestId('userCardButton'));
    expect(mockNavigate).toHaveBeenCalledWith(`${USERS_ROUTE}/${mockUserCardId}${TWEETS_ROUTE}`);
  });
});
