import React, { useState } from 'react';

import { Modal } from '../components/Modal';
import { EditForm } from '../components/EditForm';

/**
 * Step 3: Render a form and everything needed to be able to edit the popup
 */
export const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Modal
        title="Change popup definition"
        isOpen={isOpen}
        clickHandler={clickHandler}
      >
        <EditForm />
      </Modal>
    </>
  );
};
