import React from 'react';

//Material-ui Components
import {
  Container,
  Input,
  InputLabel,
  FormControl,
  makeStyles,
  InputAdornment,
  IconButton,
  Button,
  Grid,
  Paper,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


import { Heading } from '../../components/index'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
  },
  heroContent: {
    // backgroundColor: "#242B2E",
    padding: theme.spacing(20, 8, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

  textField: {
    display: 'block',
    width: '40ch',
  },
  paper:{
    backgroundColor:"#f2f2f2",
    padding:"3rem"
  }
}
));

const SignIn = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.heroContent}>
      <Container >
      <Paper className={classes.paper}>
        <Heading text="Sign In" />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"

        >
          <FormControl className={classes.textField}>
            <Input
              fullWidth="true"
              id="standard-adornment-weight"
              placeholder="Username"
              value={values.weight}
              onChange={handleChange('weight')}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </FormControl>
          <FormControl className={classes.textField} >

            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              fullWidth="true"
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button className={classes.heroButtons} variant="contained">Sign In</Button>
          <Button className={classes.heroButtons} color="primary" variant="contained">Forgot Password</Button>
        </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default SignIn;