import Main from '../components/Main';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    fontFamily: 'fantasy, sans-serif',
    '& *': {
      boxSizing: 'border-box'
    }
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Main />
    </div>
  );
}

export default App;
