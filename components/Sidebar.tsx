import React from 'react'
import  Paper  from '@mui/material/Paper';
import  Grid  from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';



let date = new Date().toLocaleDateString();
const Sidebar = () => {
    return (
        <Paper square sx={{backgroundColor: '#c62828', p:2}}>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={5}>
                    <Typography  sx={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
                        {`CURRENT FUEL PRICE INDEX (${date})`}
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="h3" sx={{ color: 'white', fontStyle: 'oblique',fontFamily: 'sans-serif',letterSpacing: -3,  fontStretch: 'expanded' }}>
                        158
                    </Typography>
                   
                </Grid>
                <Grid item xs>
                    <ArrowForwardIosOutlinedIcon fontSize="small" sx={{ color: 'white' }}/>
                </Grid>
            </Grid>
       </Paper>
    )
}

export default Sidebar
