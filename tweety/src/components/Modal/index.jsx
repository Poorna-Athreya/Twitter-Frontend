import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export default function Modal({ setShowModal, modalSubmitHandler }) {
  const [newTweet, setNewTweet] = useState('');

  const onChangeHandler = (event) => {
    setNewTweet(event.target.value);
  };

  const onPost = (event) => {
    event.preventDefault();
    modalSubmitHandler(newTweet);
    setNewTweet('');
  };
  return (
    <div className="modal">
      <button data-testid="modalCloseButton" type="button" onClick={() => setShowModal(false)} className="cross-btn">X</button>
      <div className="new-tweet-box">
        <h3 data-testid="modalHeading">Add New Tweet</h3>
        <br />
        <input data-testid="modalInput" type="text" value={newTweet} className="new-tweet-text-box" onChange={onChangeHandler} />
      </div>
      <br />
      <button data-testid="modalSubmitButton" type="submit" className="post-new-tweet" onClick={onPost}>Post</button>
    </div>
  );
}
Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  modalSubmitHandler: PropTypes.func.isRequired,
};
