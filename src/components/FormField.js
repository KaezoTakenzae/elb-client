import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  input: {
    display: 'block',
    width: '100%',
    minHeight: 30,
    borderRadius: 4,
    border: '1px solid black',
    marginBottom: 8,
    padding: 4,
    fontFamily: 'fantasy, sans-serif'
  }
})

const Input = ({input, name, onChange, type, options}) => {
  const classes = useStyles();
  const label = (
    <label htmlFor={name}>
      {input}
    </label>
  );
  let field = null;
  switch(type) {
    case 'textarea':
      field = <textarea id={name} className={classes.input} name={name} onChange={onChange} />;
      break;
    case 'select':
      field = (
        <select id={name} className={classes.input} name={name} onChange={onChange}>
          {
            options ? options.map((option, i) => (
              <option key={i} value={option._id}>{option.name}</option>
            )) : null
          }
        </select>
      );
      break;
    default:
      field = <input id={name} className={classes.input} name={name} onChange={onChange} />;
  }
  return (
    <>
      {label}
      {field}
    </>
  )
};

export default Input;
