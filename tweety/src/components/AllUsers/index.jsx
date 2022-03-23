import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCard from '../UserCard';
import './AllUsers.css';
import makeRequest from '../../utils/makeRequest';
import { getUsers } from '../../constants/apiEndpoints';

function AllUsers() {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    makeRequest(getUsers, {}, navigate).then((responseData) => {
      setAllUsers(() => responseData.users);
    });
  }, []);

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
