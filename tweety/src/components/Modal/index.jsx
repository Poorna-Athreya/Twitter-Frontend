import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest';
import { addNewTweetsForUser } from '../../constants/apiEndpoints';
import './Modal.css';

export default function Modal({ setShowModal }) {
  const [newTweet, setNewTweet] = useState('');
  const { userId } = useParams();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setNewTweet(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    makeRequest(addNewTweetsForUser(userId), { data: { text: `${newTweet}` } }, navigate)
      .then(() => {
        setNewTweet('');
        setShowModal(false);
      }, []);
    window.location.reload();
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
      <button data-testid="modalSubmitButton" type="submit" className="post-new-tweet" onClick={onClickHandler}>Post</button>
    </div>
  );
}
Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};
