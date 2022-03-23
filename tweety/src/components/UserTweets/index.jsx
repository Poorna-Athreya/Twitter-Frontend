import React, { useState, useEffect } from 'react';
import './UserTweets.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import makeRequest from '../../utils/makeRequest';
import { getUsers, getTweetsForUser } from '../../constants/apiEndpoints';
import Tweet from '../Tweet';
import Modal from '../Modal';
import { USERS_ROUTE } from '../../constants/routes';

function UserTweets() {
  const params = useParams();
  const navigate = useNavigate();
  const { userId } = params;
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    makeRequest(getUsers, {}, navigate).then((response) => {
      setUserDetails(response.users.find((eachUser) => eachUser.id === parseInt(userId, 10)));
    });
  }, []);
  const [userTweets, setUserTweets] = useState([]);
  useEffect(() => {
    makeRequest(getTweetsForUser(userId), {}, navigate).then((res) => {
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
      <button type="button" className="back-to-users" onClick={() => navigate(`${USERS_ROUTE}`)}>
        ← Back To Users
      </button>
      <div className="tweets-top-bar">
        <h1>
          {`${userDetails.name} (${userDetails.handle})`}
        </h1>
        <button type="button" onClick={openModal} className="add-new-tweet-btn">
          + Add New Tweet
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
