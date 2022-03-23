/* eslint-disable react/prop-types */
import React from 'react';
import './Modal.css';

export default function Modal({ setShowModal }) {
  return (
    <div className="modal">
      <button type="button" onClick={() => setShowModal(false)}>X</button>
      <div className="new-tweet-box">
        <h3>Add New Tweet</h3>
        <br />
        <input type="text" className="new-tweet-text-box" />
        <br />
        <br />
        <button type="submit" className="post-new-tweet">Post</button>
      </div>
    </div>
  );
}
