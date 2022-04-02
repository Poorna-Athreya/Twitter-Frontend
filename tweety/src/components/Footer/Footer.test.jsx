import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './index';

describe('Footer', () => {
  it('should take a snapshot for Footer', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment(<Footer />)).toMatchSnapshot();
  });
  it('should have the required elements when Footer is rendered', () => {
    render(<Footer />);
    expect(screen.queryByTestId('footerText')).toBeTruthy();
    expect(screen.getByText('copyright@2022')).toBeTruthy();
  });
});
