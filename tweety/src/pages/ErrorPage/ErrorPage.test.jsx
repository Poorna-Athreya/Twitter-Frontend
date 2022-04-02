import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from './index';

describe('ErrorPage', () => {
  it('should take a snapshot of ErrorPage', () => {
    const { asFragment } = render(<ErrorPage />);

    expect(asFragment(<ErrorPage />)).toMatchSnapshot();
  });
  it('should print the correct error message when the correct prop types are given', () => {
    const mockErrorName = 'Bad Request';
    const mockErrorCode = '400';
    render(<ErrorPage errorName={mockErrorName} errorCode={mockErrorCode} />);
    expect(screen.getByTestId('errorText')).toBeTruthy();
    expect(screen.queryAllByText(`Error${mockErrorCode}!${mockErrorName}`)).toBeTruthy();
  });
});
