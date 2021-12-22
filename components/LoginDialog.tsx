import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { loginSchema } from '../src/constants';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Controller,SubmitHandler,useForm } from "react-hook-form";
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { useClientSideStore } from '../src/orderStore';
import { IFormInput } from '../src/constants';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import theme from '../src/theme';
import InputLabel from '@mui/material/InputLabel';
import BootstrapInput from './BootstrapInput';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Typography  from '@mui/material/Typography';
import  FormHelperText  from '@mui/material/FormHelperText';




const mdTheme = createTheme({
    palette: { primary: { main: '#90caf9' } },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#d32f2f',
                    textTransform: 'capitalize',
                    '&:hover': {
                        backgroundColor: '#c62828'
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: 20
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                        root: {
                "&.Mui-error": {
                borderColor: "yellow"
                }
            }

            }
        }
    }
  
});

export default function LoginDialog() {
    const toggle = useClientSideStore(state => state.toggleLoginDialog);
    const [loading, _setLoading] = React.useState<boolean>(false);
   

      const handleClose = () => {
      useClientSideStore.setState({toggleLoginDialog: false})
      };
    
    const { control, handleSubmit, register, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema)
    });
    
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    return (
       <ThemeProvider theme={mdTheme}>
    <div>
     
          <Dialog
              open={toggle}
              onClose={handleClose}
              sx={{
                  "& .MuiDialog-container": {
                      mt:2,
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start'
                  }
              }}
           PaperProps={{
               square: true,
               sx: { maxWidth: 640}
             }}
          >
        <DialogContent>
        
             <Grid container >
                      <Grid item xs={7}>
                          <Box
           component="form"
              sx={{
        '& .MuiInputBase-root': {  width:310}
                }}
        onSubmit={handleSubmit(onSubmit)}
          method='post'
          action='/api/auth/callback/credentials'
          noValidate
           autoComplete="off">
           <InputLabel error={!!errors.email}  shrink htmlFor="bootstrap-input">
          Email
        </InputLabel>
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange} }) =>
        <FormControl variant="standard">
       
         <BootstrapInput
            {...register("email")}
                        //value={value}
                        id="bootstrap-input"
            error={!!errors.email}
                        sx={{ marginBottom: -2 }}   
                        onChange={onChange}    
                   placeholder='Enter your email'     
                     //helperText={errors.email?.message}    
                    /> 
                     {
                        errors.email && 
                        <FormHelperText sx={{color:'red'}}>{ errors.email.message}</FormHelperText>

                    }
      </FormControl>
             
          }
          />
           <InputLabel error={!!errors.password} shrink htmlFor="bootstrap-input">
                Password
                </InputLabel>    
          <Controller
            name="password"
          control={control}                       
            render={({ field: {value, onChange } }) => 
             
             <FormControl variant="standard">
                
                    <BootstrapInput
                        {...register("password")}
                        sx={{ marginBottom: -2 }} 
                       // value={value}
                        id="bootstrap-input" 
                        placeholder='********'
                        type="password"
                        onChange={onChange}
                        error={!!errors.password}
                         //helperText={?.message}
                    /> 
                    {
                        errors.password && 
                        <FormHelperText sx={{color:'red'}}>{ errors.password.message}</FormHelperText>

                    }
                  
            </FormControl>
          }
          />
        
                              
        <FormControlLabel sx={{ color: 'red' }} control={<Switch defaultChecked />}
       label={<Typography sx={{fontSize: 14}}>Remember User Name</Typography>} />
           <Link href="#" variant="subtitle2" color="primary">
                Forgot password?
              </Link>
          <Button     
            type="submit"
            fullWidth
            variant="contained"
             size="large"
            color="secondary"
             sx={{ margin: theme.spacing(3, 0, 2), py: 1.6, width:'85%'}}
          >
         {
              loading ? <CircularProgress color="inherit" size={20} /> :
                "Login"
          }
            
                              </Button>
                              </Box>
          <Grid container>
            
           
                              </Grid>
                              
                      </Grid>
                      
                      <Grid item xs={5}>
                                <Box
                                    sx={{
                                        backgroundColor: '#d32f2f',
                                        display: 'flex',
                                        alignItems: 'center',
                                       
                                        justifyContent:'center',
                                        height: 100,
                                        mb: 1
                                    }}>
                                    <Typography sx={{fontSize:30,fontStyle:'oblique', letterSpacing:-1, color:'white'}}>
                                     e-SKYCARGO
                                    </Typography>

                                </Box>
                                <Typography gutterBottom sx={{ color: '#616161', fontSize:19 }}>
                                    Welcome to the registered user services.
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#616161' }}>
                                    Log in to access the complete suite of transactional
                                    services that allow you to make bookings on-line, submit
                                    and print air waybills, file and track claims, communicate with
                                    key people, automatically set up your default contact details to
                                    receive automatic notifications on the movement of your shipment and
                                    track each consignment through every stage of its journey.
                              </Typography>
                      </Grid>    
                      <Grid />
                  </Grid>
                  
       </DialogContent>
      </Dialog>
            </div>
            </ThemeProvider>
  );
}
