import React, { useState, useEffect } from 'react';
import { getPopup } from '../lib/popup';

import { Modal } from '../components/Modal';
import { isMobileDevice, checkUserLocation } from '../lib/utils';

export const Demo = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState(null);

  const showModalForUser = async () => {
    const firstTimeVisit = localStorage.getItem('alreadyVisited');
    const isMobileUser = isMobileDevice();
    const userCountry = await checkUserLocation();
    const userLanguage = navigator.language;

    if (!firstTimeVisit) localStorage.setItem('alreadyVisited', 'true');

    // I am not sure if ALL conditions should be met or just one
    if (
      firstTimeVisit ||
      isMobileUser ||
      userCountry === 'France' ||
      userLanguage === 'en-EN'
    ) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    async function getData() {
      const response = await getPopup();
      setData(response.message);
    }
    getData();
    showModalForUser();
  }, []);

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
        {data}
      </Modal>
    </>
  );
};
