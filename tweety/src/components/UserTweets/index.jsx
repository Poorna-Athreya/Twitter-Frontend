/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './UserTweets.css';
import { useParams } from 'react-router-dom';
import { ALL_USERS, USER_TWEETS } from '../../constants/users';
import Tweet from '../Tweet';
import Modal from '../Modal';

function UserTweets() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(ALL_USERS
    .find((eachUser) => eachUser.id === parseInt(userId, 10)));
  const [userTweets, setUserTweets] = useState(USER_TWEETS);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const tweetsDisplay = userTweets.map((eachTweet) => (
    <Tweet
      key={eachTweet.id}
      text={eachTweet.text}
      createdAt={eachTweet.createdAt}
    />
  ));
  return (
    <div className="all-user-tweets">
      <div className="tweets-top-bar">
        <h1>
          {`${userDetails.name} (${userDetails.handle})`}
        </h1>
        {/* Add New tweet component */}
        {/* <AddNewTweet /> */}
        <button type="button" onClick={openModal} className="add-new-tweet-btn">
          Add New Tweet
        </button>
      </div>
      <div className="new-tweet-modal">{showModal ? <Modal setShowModal={setShowModal} /> : null}</div>
      <div />
      <div className="tweets-container">
        {tweetsDisplay}
      </div>
    </div>
  );
}
export default UserTweets;
