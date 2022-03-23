import React, { useState, useEffect } from 'react';
import './UserTweets.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import makeRequest from '../../utils/makeRequest';
import { getUsers, getTweetsForUser } from '../../constants/apiEndpoints';
import Tweet from '../Tweet';
import Modal from '../Modal';

function UserTweets() {
  const params = useParams();
  const { userId } = params;
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    makeRequest(getUsers).then((response) => {
      setUserDetails(response.users.find((eachUser) => eachUser.id === parseInt(userId, 10)));
    });
  }, []);
  const [userTweets, setUserTweets] = useState([]);
  useEffect(() => {
    makeRequest(getTweetsForUser(userId)).then((res) => {
      setUserTweets(res.tweets);
    });
  }, []);

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
        <button type="button" onClick={openModal} className="add-new-tweet-btn">
          Add New Tweet
          {' '}
          <FontAwesomeIcon icon={faTwitter} />
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
