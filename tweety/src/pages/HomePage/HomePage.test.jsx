import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './index';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));

describe('HomePage', () => {
  it('should take a snapshot of HomePage', () => {
    const { asFragment } = render(<HomePage />);

    expect(asFragment(<HomePage />)).toMatchSnapshot();
  });
});
