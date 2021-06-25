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
    TextField,
    Grid
  } from '@material-ui/core';
  import Visibility from '@material-ui/icons/Visibility';
  import VisibilityOff from '@material-ui/icons/VisibilityOff';
  import { Heading } from '../../components/index'

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100vw',
    },

    heroContent: {
      backgroundColor: "#242B2E",
      padding: theme.spacing(20, 8, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },

    textField: {
        display:'block',
        width: '25ch',
        margin: theme.spacing(5,0,0)

      }
  }
  ));
   
  const SignUp = () =>{
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
    
    return(
    <div className={classes.heroContent}>
      <Container >
        <Heading text="Sign Up" />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <TextField
            id="margin-none"
            placeholder="Your Full name"
            className={classes.textField}
          />
          <TextField
            id="margin-none"
            placeholder="Your Email Id"
            className={classes.textField}
          />
          <TextField
            id="margin-none"
            placeholder="Your Phone number"
            className={classes.textField}
          />
          <FormControl className={ classes.textField }>
            <Input
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
          <FormControl className={ classes.textField} >
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
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
          <Button className={classes.heroButtons} variant="contained">Default</Button>
        </Grid>
      
      </Container>
    </div>
     );
};

export default SignUp;