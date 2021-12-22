 import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Controller,SubmitHandler,useForm } from "react-hook-form";
import CircularProgress from '@mui/material/CircularProgress';
import { authStore } from '../src/authStore';
import { IFormInput, loginSchema } from '../src/constants';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { signIn } from 'next-auth/react';
import theme from '../src/theme';
import { useRouter } from "next/router";
import Alert from '@mui/material/Alert';



export default function SignIn() {
    const { error } = useRouter().query;
  const { control, handleSubmit, register, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema)
  });
  //const error = authStore(state => state.error);
  const setAuthView = authStore(state => state.setAuthView)
  const loading = authStore(state => state.loading)

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
     
    data.callbackUrl =  `/admin-area/home`
   // data.redirect = false;
    authStore.setState({ loading: true });
    signIn('credentials' , data  );
    // reset();
   // authStore.setState({loading: false });

    // console.log(data)

  }
 
  return (
    <Container component="main" maxWidth="xs" sx={{pt:10}}>
      <CssBaseline />
      <Paper sx={{
        //marginTop: theme.spacing(8),
        p: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       
      }}
        elevation={5}
        square>
        <Avatar  sx={{ margin: theme.spacing(1), backgroundColor: theme.palette.secondary.main,}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
           style={{   width: '100%',  marginTop: theme.spacing(1),}}
          onSubmit={handleSubmit(onSubmit)}
          method='post'
          action='/api/auth/callback/credentials'
          noValidate
           autoComplete="off">
          
          <Controller
            name="email"
            control={control}
            render={({ field: {value} }) =>
              
              <TextField
                variant="outlined"
                color="secondary"
                margin="normal"
                {...register("email")}
                //value={value}
            required
            error={!!errors.email}
            // onChange={onChange}
                fullWidth
                helperText={errors.email?.message}
                defaultValue={value}
                id="email"
                label="Email Address"
            //autoComplete="email"
            autoFocus
          />
          }
          />
          
          
          <Controller
            name="password"
            control={control}
            render={({ field: {value } }) => 
             
              <TextField
                variant="outlined"
                 color="secondary"
                margin="normal"
                {...register("password")}
            required
            error={!!errors.password}
              //  value={value}
                defaultValue={value}
           // onChange={onChange}
            fullWidth
                label="Password"
                helperText={errors.password?.message}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          }
          />
          {error && <Alert severity="error">{error}</Alert>}
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
             sx={{ margin: theme.spacing(3, 0, 2),}}
          >
         {
              loading ? <CircularProgress color="inherit" size={20} /> :
                "SignIn"
          }
            
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="caption" color="secondary">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
                          <Link variant="caption" component="button" color="secondary" onClick={(e) => {
                              e.preventDefault()
                              setAuthView('sign_up')
              }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
     
    </Container>
  );
}