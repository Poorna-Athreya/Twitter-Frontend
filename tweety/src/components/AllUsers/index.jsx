import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../UserCard';
import './AllUsers.css';

function AllUsers({ allUsers }) {
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
    <div data-testid="userContainer" className="users-container">
      {allUsersDisplay}
    </div>
  );
}

AllUsers.propTypes = {
  allUsers: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default AllUsers;
