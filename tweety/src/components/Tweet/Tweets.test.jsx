/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Tweets from './index';

describe('Tweets', () => {
  it('should take a snapshot for Tweets', () => {
    const mockTweetText = 'Great Project!';
    const mockTweetCreatedAt = '2022-03-23T16:39:08.227Z';
    const { asFragment } = render(<Tweets text={mockTweetText} createdAt={mockTweetCreatedAt} />);
    expect(asFragment(<Tweets text={mockTweetText} createdAt={mockTweetCreatedAt} />)).toMatchSnapshot();
  });
  it('should have the required elements when Tweets is rendered', () => {
    const mockTweetText = 'Great Project!';
    const mockTweetCreatedAt = '2022-03-23T16:39:08.227Z';
    render(<Tweets text={mockTweetText} createdAt={mockTweetCreatedAt} />);
    expect(screen.queryByTestId('tweetText')).toBeTruthy();
    expect(screen.getByText(mockTweetText)).toBeTruthy();
    expect(screen.queryByTestId('tweetCreatedAt')).toBeTruthy();
    expect(screen.getByText(mockTweetCreatedAt)).toBeTruthy();
  });
});
