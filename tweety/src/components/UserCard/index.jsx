import React from 'react';
import PropTypes from 'prop-types';

function UserCard({ userName, userHandle, location }) {
  return (
    <button aria-label="user-card-button" type="button" className="user-card">
      <h1 className="user-name">{userName}</h1>
      <br />
      <div className="user-details">
        <p className="user-handle">{userHandle}</p>
        <p className="user-location">{location}</p>
      </div>
    </button>
  );
}
UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default UserCard;
