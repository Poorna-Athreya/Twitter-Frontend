import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './index';

describe('Header', () => {
  it('should take a snapshot for Header', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment(<Header />)).toMatchSnapshot();
  });
  it('should have the required elements when Header is rendered', () => {
    render(<Header />);
    expect(screen.queryByTestId('headerIcon')).toBeTruthy();
    expect(screen.queryByTestId('headerHeading')).toBeTruthy();
    expect(screen.getByText('Tweety')).toBeTruthy();
  });
});
