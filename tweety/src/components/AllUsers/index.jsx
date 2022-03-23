/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ALL_USERS } from '../../constants/users';
import UserCard from '../UserCard';
import './AllUsers.css';
import makeRequest from '../../utils/makeRequest';

function AllUsers() {
  const [allUsers, setAllUsers] = useState(ALL_USERS);
  // setAllUsers(ALL_USERS);

  // const [isInitialised, setIsInitialised] = useState(false);
  const allUsersDisplay = allUsers.map((eachUser) => (
    <UserCard
      userName={eachUser.name}
      key={eachUser.id}
      id={eachUser.id}
      location={eachUser.location}
      userHandle={eachUser.handle}
    />
  ));
  return (
    <div className="users-container">
      {allUsersDisplay}
    </div>
  );
}
export default AllUsers;
