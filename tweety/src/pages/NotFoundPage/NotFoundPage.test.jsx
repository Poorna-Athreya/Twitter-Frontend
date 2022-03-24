import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './index';

describe('NotFoundPage', () => {
  it('should take a snapshot of NotFoundPage', () => {
    const { asFragment } = render(<NotFoundPage />);

    expect(asFragment(<NotFoundPage />)).toMatchSnapshot();
  });
});
