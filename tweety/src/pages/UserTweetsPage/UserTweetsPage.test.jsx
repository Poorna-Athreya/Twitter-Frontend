import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import UserTweetsPage from './index';
import { USERS_ROUTE } from '../../constants/routes';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useParams: () => ({
    userId: '2',
  }),
}));
const original = window.location;
beforeAll(() => {
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: { reload: jest.fn() },
  });
});

afterAll(() => {
  Object.defineProperty(window, 'location', { configurable: true, value: original });
});

const mockMakeRequestGetUsers = () => ({
  users: [
    {
      id: 1,
      name: 'Twitter Dev',
      handle: 'TwitterDev',
      location: 'Internet',
    },
    {
      id: 2,
      name: 'Lorem Ipsum',
      handle: 'LoremIpsum',
      location: 'Internet',
    }],
});

const mockMakeRequestGetTweets = () => ({
  tweets: [
    {
      text: 'Great Project!',
      createdAt: '2022-03-23T16:39:08.227Z',
      id: 16,
    },
  ],
});

const mockMakeRequestPostTweets = jest.fn().mockImplementation(() => ({ result: 'Successfully created the Tweet' }));

jest.mock('../../utils/makeRequest/', () => (apiEndpoint) => {
  let response;
  if (apiEndpoint.url === '/users') {
    response = mockMakeRequestGetUsers();
  } else if (apiEndpoint.url === '/users/2/tweets' && apiEndpoint.method === 'get') {
    response = mockMakeRequestGetTweets();
  } else if (apiEndpoint.url === '/users/2/tweets' && apiEndpoint.method === 'post') {
    response = mockMakeRequestPostTweets();
  }
  return Promise.resolve(response);
});

describe('UserTweetsPage', () => {
  beforeEach(() => {
    render(<UserTweetsPage />);
  });
  it('should take a snapshot of UserTweetsPage', () => {
    const { asFragment } = render(<UserTweetsPage />);
    expect(asFragment(<UserTweetsPage />)).toMatchSnapshot();
  });
  it('should render all the elements when the page is loaded', async () => {
    const mockTweetText = 'Great Project!';
    const mockTweetCreatedAt = '2022-03-23T16:39:08.227Z';
    expect(screen.getAllByTestId('usersTweetsPageBackButton'));
    expect(screen.getAllByTestId('usersTweetsPageAddButton'));
    expect(screen.getAllByTestId('usersTweetsPageIcon'));
    expect(screen.queryAllByText('← Back To Users'));
    expect(screen.queryAllByText('+ Add New Tweet'));
    expect(await screen.findAllByText('Lorem Ipsum (LoremIpsum)'));
    expect(await screen.findAllByTestId('tweetText')).toBeTruthy();
    expect(await screen.findByText(mockTweetText)).toBeTruthy();
    expect(await screen.findAllByTestId('tweetCreatedAt')).toBeTruthy();
    expect(await screen.findByText(mockTweetCreatedAt)).toBeTruthy();
  });
  it('should call navigate with correct route when go back users button is clicked', () => {
    fireEvent.click(screen.getByTestId('usersTweetsPageBackButton'));
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(USERS_ROUTE);
  });
  it('should open the modal when the add tweets button is clicked', () => {
    fireEvent.click(screen.getByTestId('usersTweetsPageAddButton'));
    expect(screen.getByTestId('modalCloseButton')).toBeTruthy();
    expect(screen.getByTestId('modalHeading')).toBeTruthy();
    expect(screen.getByTestId('modalInput')).toBeTruthy();
    expect(screen.getByTestId('modalSubmitButton')).toBeTruthy();
  });
  it('should call the mock make request post tweet method when the model is submitted', () => {
    fireEvent.click(screen.getByTestId('usersTweetsPageAddButton'));
    fireEvent.click(screen.getByTestId('modalSubmitButton'));
    expect(mockMakeRequestPostTweets).toHaveBeenCalledTimes(1);
  });
});
