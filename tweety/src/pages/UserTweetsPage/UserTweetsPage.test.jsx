import React from 'react';
import { render } from '@testing-library/react';
import UserTweetsPage from './index';

const mockNavigate = jest.fn();
const mockParams = jest.fn().mockResolvedValue(2);
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate, useParams: () => mockParams }));

describe('UserTweetsPage', () => {
  it('should take a snapshot of UserTweetsPage', () => {
    const { asFragment } = render(<UserTweetsPage />);

    expect(asFragment(<UserTweetsPage />)).toMatchSnapshot();
  });
});
