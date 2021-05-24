import React, { useState } from 'react';

import Button from './Button';
import CreateAJobForm from './CreateAJobForm';

const CreateAJob = ({properties}) => {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <Button text='Create a Job' onClick={() => setFormOpen(true)} disabled={properties.length === 0} />
      {formOpen ?
        <CreateAJobForm
          closeFunc={() => setFormOpen(false)}
          properties={properties}
        /> : null
      }
    </>
  );
};

export default CreateAJob;
