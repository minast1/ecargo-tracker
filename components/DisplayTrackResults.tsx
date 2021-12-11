import React from 'react'
import  Paper  from '@mui/material/Paper';
import  Divider  from '@mui/material/Divider';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import  Grid  from '@mui/material/Grid';
import CustomizedStepper from './Stepper';
import { trackingQueryResultStore } from '../src/dataStore';
import { Status } from '.prisma/client';


const DisplayTrackResults = () => {
    const data = trackingQueryResultStore(state => state.trackerResult)
    return (
       <Paper square sx={{backgroundColor: 'paper', p:1, height: 350 , boxShadow: 12}}>
        <Typography sx={{ fontSize: 15, fontWeight: 'bold', pb: 1 }}>My Orders/Tracking  </Typography>
            <Divider />
            <Container maxWidth="lg" sx={{border:'1px solid lightgray', mt:5}}>
                <Grid container spacing={2} alignItems="center" sx={{py:1}}>
                    <Grid item xs={3}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 'bold'}}>Tracking #:</Typography>
                        <Typography sx={{ fontSize: '15px', color: 'lightslategray' }}>{data?.tracking_number}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                     <Typography sx={{ fontSize: '16px',fontWeight: 'bold'}}>Shipping By:</Typography>
                        <Typography sx={{ fontSize: '15px', color: 'lightslategray' }}>{data?.courier}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                       <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>Estimated Delivery Time:</Typography>
                        <Typography sx={{ fontSize: '15px', color: 'lightslategray' }}>{ data?.date}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                     <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>Status:</Typography>
                        <Typography sx={{ fontSize: '15px', color: 'lightslategray' }}>{ data?.status}</Typography>
                    </Grid>
                   
                    
                </Grid>
              </Container>
        
            <Box sx={{mt: 4, mx:1, mb: 2}}>
             </Box>

            <Divider sx={{mb:2}}/>  
           
       </Paper>
    )
}

export default DisplayTrackResults
