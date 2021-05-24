import React, { useState } from 'react';
import {createUseStyles} from 'react-jss';

import api from '../api';
import FormField from './FormField';
import Button from './Button';

const useStyles = createUseStyles({
  background: {
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  modal: {
    width: 250,
    height: 350,
    borderRadius: 8,
    padding: 8,
    background: 'white',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    overflow: 'scroll'
  },
  closeBtn: {
    position: 'absolute',
    right: 4,
    widht: 20,
    height: 20,
    borderRadius: '50%',
    border: '1px solid grey'
  },
  heading: {
    margin: 4,
    fontSize: 20,
  },
  form: {
    padding: 8,
    width: '100%',
    textAlign: 'left'
  },
  btnContainer: {
    textAlign: 'center'
  }
});

const CreateAJobForm = ({closeFunc, properties}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    summary: '',
    description: '',
    property: properties[0]._id
  });

  const onChange = event => {
      let newValues = { ...values };
      newValues[event.target.name] = event.target.value;
      setValues(newValues);
  };
  const submit = (event) => {
    event.preventDefault();
    console.log('trying to submit', values);
    api.insertJob(values)
      .then(response => {
        if (response.data.success) {
          alert('New entry added!');
          window.location.reload();
        } else {
          alert('Job creation failed, please check all fields are completed');
        }
      })
      .catch((err, response) => {
        alert('Job creation failed, please check all fields are completed');
      });
  }
  return (
    <>
      <div className={classes.background} onClick={closeFunc} />
      <div className={classes.modal}>
        <button className={classes.closeBtn} onClick={closeFunc}>X</button>
        <h1 className={classes.heading}>Create a Job</h1>
        <form className={classes.form} onSubmit={submit}>
          <FormField
            input='Summary'
            name='summary'
            value={values.summary}
            onChange={onChange}
          />
          <FormField
            input='Description'
            type='textarea'
            name='description'
            value={values.description}
            onChange={onChange}
          />
          <FormField
            input='Property'
            type='select'
            options={properties}
            name='property'
            value={values.property}
            onChange={onChange}
          />
          <div className={classes.btnContainer}>
            <Button text='Create a Job' onClick={() => {}} />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAJobForm;
