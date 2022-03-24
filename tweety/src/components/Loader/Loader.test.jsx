import { render, screen } from '@testing-library/react';
import React from 'react';
import Loader from './index';

describe('Loader', () => {
  it('should have the required elements when Loader is rendered', () => {
    render(<Loader />);
    expect(screen.queryByTestId('loaderText')).toBeTruthy();
    expect(screen.getByText('Loading...')).toBeTruthy();
  });
});
