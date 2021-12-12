 import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { authStore } from '../src/authStore';
import { IFormInput, registerSchema } from '../src/constants';
import Container from '@mui/material/Container';
import { Controller,SubmitHandler,useForm } from "react-hook-form";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import  Paper  from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import {ResponseData} from '../pages/api/auth/signUp'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { signIn } from 'next-auth/react';
import theme from '../src/theme';


export type RegisterFormInput = {
  email: string 
  password: string 
  passwordConfirm: string
  callbackUrl? : string
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {

  const { register, control, handleSubmit, formState: { errors }, reset} = useForm<RegisterFormInput>({
  resolver: yupResolver(registerSchema)
}) ;
  const setAuthView = authStore(state => state.setAuthView);
  const loading = authStore(state => state.loading);
 //const error = authStore(state => state.error);
  
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
  
    authStore.setState({ loading: true });
    const response = await fetch(`/api/auth/signUp`, {
      method: 'POST',
      body: JSON.stringify({ ...data }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
     const newUser: ResponseData = await response.json();
    if (!response.ok) {
      authStore.setState({ error: newUser.message })
      return; 
    }

    // If the response has a status of 200, sign the new user in 
     
    signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/admin-area/home'
    });
    reset();
     authStore.setState({loading: false });
  }
   
  return (
    <Container component="main" maxWidth="xs" sx={{pt:7}}>
      <CssBaseline />
      <Paper sx={{
        p: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
              alignItems: 'center',
      }}
        square
         elevation={5}>
        <Avatar  sx={{ margin: theme.spacing(1), backgroundColor: theme.palette.secondary.main,}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form
         style={{   width: '100%',  marginTop: theme.spacing(1),}}
          onSubmit={handleSubmit(onSubmit)}
          method="post"
           noValidate
           autoComplete="off"
        >
          
          <Controller
            name="email"
            control={control}
            render={({ field: {  value } }) =>
              
             <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
              {...register("email")}
            required
                error={!!errors.email}
                helperText={errors.email?.message}
            fullWidth
             defaultValue={value}
            //onChange={onChange}
            id="email"
            label="Email Address"
           // autoComplete="email"
            autoFocus
          />
          }
          />
         
          <Controller
            name="password"
            control={control}
            render={({ field: { value } }) =>
              
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                  {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
            defaultValue={value}
            required
           // onChange={onChange}
            fullWidth
            label="Password"
            type="password"
            id="password"
           // autoComplete="current-password"
          />
          
          }
          />
          
            <Controller
            name="passwordConfirm"
            control={control}
            render={({ field: {value } }) =>
              
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                {...register("passwordConfirm")}
                error={!!errors.passwordConfirm}
                helperText={errors.passwordConfirm?.message}
            defaultValue={value}
            required
           // onChange={onChange}
            fullWidth
            label="Password Confirmation"
            type="password"
            id="password"
           // autoComplete="current-password"
          />
          
          }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ margin: theme.spacing(3, 0, 2),}}
          >{
              loading ? <CircularProgress color="inherit" size={20} /> :
                "SignUp"
          }
            
          </Button>
          <Grid container>
            <Grid item xs>
             
            </Grid>
            <Grid item>
                          <Link href="#" variant="body2" color="secondary" component="button" onClick={(e) => {
                              e.preventDefault();
                              setAuthView('sign_in')
              }}>
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
     
    </Container>
  );
}