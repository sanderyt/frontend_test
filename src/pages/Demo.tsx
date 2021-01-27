import React, { useState } from 'react';
import { getPopup } from '../lib/popup';

import { Modal } from '../components/Modal';

export const Demo = () => {
  const [isOpen, setIsOpen] = useState(true);
  const popup = getPopup();

  const toggleModal = () => setIsOpen(!isOpen);

  /**
   * Step 1: Render popup message in an overlay
   */

  return (
    <>
      <h1>Some content on the page</h1>
      <span>
        Here the modals only shows first time and the other conditions
      </span>
      <Modal
        title="Welcome to Wisepops"
        isOpen={isOpen}
        clickHandler={toggleModal}
      >
        {popup.message}
      </Modal>
    </>
  );
};
