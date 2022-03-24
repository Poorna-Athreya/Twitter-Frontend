import React from 'react';
import './Tweet.css';
import PropTypes from 'prop-types';

function Tweet({ text, createdAt }) {
  return (
    <div className="tweet">
      <h3 data-testid="tweetText" className="tweet-text">{text}</h3>
      <p data-testid="tweetCreatedAt" className="tweet-timestamp">{createdAt}</p>
    </div>
  );
}
Tweet.propTypes = {
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
export default Tweet;
