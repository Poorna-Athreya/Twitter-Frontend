/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './UserTweets.css';
import { useParams } from 'react-router-dom';
import { ALL_USERS, USER_TWEETS } from '../../constants/users';
import Tweet from '../Tweet';

function UserTweets() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(ALL_USERS
    .find((eachUser) => eachUser.id === parseInt(userId, 10)));
  console.log(userDetails);
  const [userTweets, setUserTweets] = useState(USER_TWEETS);
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
      </div>
      <div className="tweets-container">
        {tweetsDisplay}
      </div>
    </div>
  );
}
export default UserTweets;
