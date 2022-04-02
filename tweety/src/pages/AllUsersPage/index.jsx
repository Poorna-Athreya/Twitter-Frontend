import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AllUsers } from '../../components';
import './AllUsersPage.css';
import makeRequest from '../../utils/makeRequest';
import { getUsers } from '../../constants/apiEndpoints';

function AllUsersPage() {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(getUsers, {}, navigate).then((responseData) => {
      setAllUsers(responseData.users);
    });
  }, []);
  return (
    <div className="all-users-page">
      <AllUsers allUsers={allUsers} />
    </div>
  );
}
export default AllUsersPage;
