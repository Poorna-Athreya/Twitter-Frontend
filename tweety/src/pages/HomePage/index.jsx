import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="root-container">
      <p className="hompage-main-para"> Welcome to Tweety</p>

      <button
        className="sync-button"
        type="submit"
        onClick={() => {
          navigate('/records');
        }}

      >
        users
      </button>

    </div>

  );
}
export default HomePage;
