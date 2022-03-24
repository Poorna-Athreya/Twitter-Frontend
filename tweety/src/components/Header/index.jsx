import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header className="header">
      <h1 data-testid="headerIcon" className="tweety-icon"><FontAwesomeIcon icon={faTwitter} /></h1>
      <h1 data-testid="headerHeading" className="tweety-heading">Tweety</h1>
    </header>
  );
}
export default Header;
