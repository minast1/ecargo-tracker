import React from 'react'
import  Paper  from '@mui/material/Paper';
import  Divider  from '@mui/material/Divider';
import Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';


interface AppProps {
  title: string
}
const ContactArea = ({title}:AppProps) => {
    return (
       <Paper square sx={{backgroundColor: 'paper', p:1, height: 330 , boxShadow: 10}}>
        <Typography sx={{ fontSize: 12, fontWeight: 'bold', pb: 1 }}>{title } </Typography>
            <Divider />
            <Typography sx={{ fontSize: '28px',letterSpacing:0, fontStyle:'oblique',pl:1,pb:2, pt:2}}>Contact us </Typography>
              <Typography variant="caption" display="block" gutterBottom sx={{pr:4, color:'gray', pl:1, mb:6}}>
                     Track and trace up to ten shipments at a time by entering either the
                     Job Reference number or the Air Waybill number.
                        </Typography>
            
            <Typography variant="subtitle2" display="block" gutterBottom sx={{ pr: 4, pl:1}}>
                Ghana
             </Typography>
            <Divider />
              <Button variant="contained" color="success" sx={{width: '28%',ml:1, mt:3}}>CONTACT</Button>

       </Paper>
    )
}

export default ContactArea
