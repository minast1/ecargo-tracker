import React from 'react'
import  Paper  from '@mui/material/Paper';
import  Divider  from '@mui/material/Divider';
import Typography  from '@mui/material/Typography';
//import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import  Grid  from '@mui/material/Grid';
//import CustomizedStepper from './Stepper';
//import { Status } from '.prisma/client';
//import { useClientSideStore } from '../src/orderStore';


const OrderException = () => {
    
    //const data = useClientSideStore(state => state.order)
    return (
       <Paper square sx={{backgroundColor: 'paper', p:1, height: 270 , boxShadow: 12}}>
        <Typography sx={{ fontSize: 15, fontWeight: 'bold', p:1 }}>My Orders/Tracking  </Typography>
            <Divider />
            <Container maxWidth="lg" sx={{ mt:1}}>
                <Grid container spacing={2} alignItems="center" sx={{py:1}}>
                    <Grid item xs={4}>
                        <Typography sx={{ fontSize: '28px',letterSpacing:-1, fontStyle:'oblique',pl:1,pb:2, pt:2}}>No results found</Typography>
                        <Divider sx={{ borderColor: 'red', borderWidth: 2, width: '53%' }} />
                         <Typography variant="caption" display="block" gutterBottom sx={{pr:4, color:'gray', pl:1, mt:3}}>
                            Sorry.We couldn't find any results matching your exact query.Please ensure that all the details
                            entered are correct, or <span style={{ color: 'red', paddingRight:5 , textDecoration: 'underline' }}>contact us </span>
                            for assistance.
                        </Typography>
                    </Grid>
                    </Grid>
              </Container>
           
       </Paper>
    )
}

export default OrderException
