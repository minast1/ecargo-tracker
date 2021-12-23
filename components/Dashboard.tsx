import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { signOut } from "next-auth/react";
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import RecentOrders from './RecentOrders';
import PrefixTable from './PrefixTable';
import OrderForm from './OrderForm';
import  Divider  from '@mui/material/Divider';






export const mdTheme = createTheme();

function DashboardContent() {
  //const [open, setOpen] = React.useState(false);
  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
           
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Welcome
            </Typography>
            <IconButton color="inherit" onClick={() => signOut({ callbackUrl: `/admin-area`})}> 
                          <LogoutSharpIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
      
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                  <Grid item xs={12} md={7} lg={7}>
                <Paper
                  elevation={10}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    //height: 240,
                  }}
                >
                  <Typography color="primary">Add New Tracking Order</Typography>
                  <Divider sx={{mb: 2}}/>
                  <OrderForm />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={5} lg={5}>
                <Paper
                 elevation={10}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 350,
                  }}
                >
                   <Typography color="primary">Airline Prefix Code Referrence Table</Typography>
                  <Divider sx={{mb: 3}}/>
                 <PrefixTable/>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <RecentOrders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}