import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from './index';

describe('ErrorPage', () => {
  it('should take a snapshot of ErrorPage', () => {
    const { asFragment } = render(<ErrorPage />);

    expect(asFragment(<ErrorPage />)).toMatchSnapshot();
  });
});
