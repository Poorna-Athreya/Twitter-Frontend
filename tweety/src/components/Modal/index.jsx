/* eslint-disable react/prop-types */
import React from 'react';

export default function Modal({ setShowModal }) {
  return (
    <div className="modal">
      <button type="button" onClick={() => setShowModal(false)}>X</button>
      <h2>Add New Tweet</h2>
      <input type="text" />
    </div>
  );
}
