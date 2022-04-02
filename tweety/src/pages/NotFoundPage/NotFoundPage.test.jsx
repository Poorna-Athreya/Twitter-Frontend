import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './index';

describe('NotFoundPage', () => {
  it('should take a snapshot of NotFoundPage', () => {
    const { asFragment } = render(<NotFoundPage />);

    expect(asFragment(<NotFoundPage />)).toMatchSnapshot();
  });
  it('should print the not found error whne it\'s rendered', () => {
    render(<NotFoundPage />);
    expect(screen.getByTestId('notFoundText')).toBeTruthy();
    expect(screen.queryAllByText('Error 404, Page not Found!')).toBeTruthy();
  });
});
