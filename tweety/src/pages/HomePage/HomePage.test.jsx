import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './index';
import { USERS_ROUTE } from '../../constants/routes';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));

describe('HomePage', () => {
  beforeEach(() => {
    render(<HomePage />);
  });
  it('should take a snapshot of HomePage', () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment(<HomePage />)).toMatchSnapshot();
  });
  it('should contain all the required elements when the home page is rendered', () => {
    expect(screen.getByTestId('homepageText')).toBeTruthy();
    expect(screen.getByTestId('homepageButton')).toBeTruthy();
    expect(screen.queryByText('Welcome to Tweety')).toBeTruthy();
    expect(screen.queryByText('users')).toBeTruthy();
  });
  it('should call the navigate function with correct route parameters when the users button is clicked', () => {
    fireEvent.click(screen.getByTestId('homepageButton'));
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(USERS_ROUTE);
  });
});
