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
      <button type="button" onClick={() => setShowModal(() => false)} className="cross-btn">X</button>
      <div className="new-tweet-box">
        <h3>Add New Tweet</h3>
        <br />
        <input type="text" value={newTweet} className="new-tweet-text-box" onChange={onChangeHandler} />
      </div>
      <br />
      <button type="submit" className="post-new-tweet" onClick={onClickHandler}>Post</button>
    </div>
  );
}
Modal.propTypes = {
  setShowModal: PropTypes.bool.isRequired,
};
