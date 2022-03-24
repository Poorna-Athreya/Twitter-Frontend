import React from 'react';
import { render } from '@testing-library/react';
import AllUsersPage from './index';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));

describe('AllUsersPage', () => {
  it('should take a snapshot of AllUsersPage', () => {
    const { asFragment } = render(<AllUsersPage />);

    expect(asFragment(<AllUsersPage />)).toMatchSnapshot();
  });
});
