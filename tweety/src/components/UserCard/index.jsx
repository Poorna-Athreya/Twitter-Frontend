import React from 'react';
import './UserCard.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { TWEETS_ROUTE, USERS_ROUTE } from '../../constants/routes';

function UserCard({
  userName, userHandle, location, id,
}) {
  const navigate = useNavigate();
  return (
    <button aria-label="user-card-button" type="button" className="user-card" onClick={() => navigate(`${USERS_ROUTE}/${id}${TWEETS_ROUTE}`)}>
      <h1 className="user-name">{userName}</h1>
      <br />
      <div className="user-details">
        <p className="user-handle">
          @
          {userHandle}
        </p>
        <p className="user-location">{location}</p>
      </div>
    </button>
  );
}
UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default UserCard;
