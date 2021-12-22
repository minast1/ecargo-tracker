import React from 'react'
import  Paper  from '@mui/material/Paper';
import Typography  from '@mui/material/Typography';
import  Divider  from '@mui/material/Divider';



const ContactForm = () => {
    return (
        <Paper square elevation={12} sx={{p:1, height:750}}>
     <Typography sx={{ fontSize: 15, fontWeight: 'bold', p:1 }}>SEND MESSAGE </Typography>
        <Divider />
        </Paper>
    )
}

export default ContactForm
