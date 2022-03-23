import React from 'react';
import './Tweet.css';
import PropTypes from 'prop-types';

function Tweet({ text, createdAt }) {
  return (
    <div className="tweet">
      <p className="tweet-timestamp">{createdAt}</p>
      <h3 className="tweet-text">{text}</h3>
    </div>
  );
}
Tweet.propTypes = {
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
export default Tweet;
