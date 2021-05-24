import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    width: 100,
    margin: 8,
    borderRadius: 8,
    padding: 8,
    border: '1px solid lightgrey',
  }
});

const Button = ({text, disabled, onClick}) => {
  const classes = useStyles();
  return (
    <button className={classes.root} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
