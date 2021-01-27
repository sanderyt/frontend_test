import React, { useState, useEffect } from 'react';
import { getPopup } from '../lib/popup';

import { Modal } from '../components/Modal';

export const Demo = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await getPopup();
      setData(response.message);
    }
    getData();
    showModalForUser();
  }, []);

  const toggleModal = () => setIsOpen(!isOpen);

  const showModalForUser = async () => {
    const firstTimeVisit = localStorage.getItem('alreadyVisited');

    if (!firstTimeVisit) localStorage.setItem('alreadyVisited', 'true');
  };

  /**
   * Step 1: Render popup message in an overlay
   */

  return (
    <>
      <h1>Some content on the page</h1>
      <span>
        Here the modals only shows first time and the other conditions
      </span>
      {data && (
        <Modal
          title="Welcome to Wisepops"
          isOpen={isOpen}
          clickHandler={toggleModal}
        >
          {data}
        </Modal>
      )}
    </>
  );
};
