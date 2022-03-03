import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Typography, Button, CssBaseline, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  welcome: {
    marginTop: '-15%',
  },
  textField: {
    width: '30%',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '35%',
    marginRight: '35%'
  },
}));

function Welcome ( props ) {
  const [name, setName] = useState('');

  const logo = "https://www.chcs.org/media/memora-health-logo.png";

  console.log(name);
  console.log(props);

  const classes = useStyles();

    return (
      <>
      <CssBaseline />
      <img src={logo} alt="" width="70%" margintop="30%"/>
      <Typography variant="h4" className={classes.welcome}>Welcome{name}!</Typography>
      <TextField 
        className={classes.textField}
        variant="standard"
        placeholder="Enter your name"
        onChange={e => setName(", " + e.target.value)} 
        >
      </TextField>

        <Button 
          component={Link} to="/view1" 
          variant="contained" 
          color="primary"
          // onClick={useEffect(() => {setName(name)}, [name])}
          onClick={() => setName(name)}
          >
          Enter Site
        </Button>

      </>
    )

}

export default Welcome;