import React, { useState } from 'react';
import Modal from '../Modal';

export default function AddNewTweet() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="add-new-tweet-btn">
      <button type="button" onClick={openModal}>
        Add New Tweet
      </button>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}
