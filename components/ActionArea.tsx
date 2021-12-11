import React from 'react'
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import  Typography  from '@mui/material/Typography';
//import Box from '@mui/material/Box';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ButtonBase from '@mui/material/ButtonBase';
import EmiratesTrack from './EmiratesTrack';
import UniversalTrack from './UniversalTrack';



//import FormLabel from '@mui/material/FormLabel';

function ActionArea() {

    const [firstTab, setFirst] = React.useState(true);
    const [secondTab, setSecond] = React.useState(false);
   
    
    return (
        <Paper elevation={8} sx={{backgroundColor: '#424242'}} square>
            <Grid container >
               
                <Grid item sm={6} sx={{ backgroundColor: firstTab ? '#424242' :'#607d8b' }}>
                    <ButtonBase
                        disableTouchRipple
                        sx={{ p: '14px', borderBottom: '0.01px solid #757575', width: '97%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                        onClick={() => {
                            setFirst(!firstTab);
                            setSecond(!secondTab);
                        }}
                    >
                        <MenuBookIcon fontSize="inherit" sx={{color: 'red'}}/>
                    <Typography variant="subtitle2" component="div" sx={{ pl: 1, color: 'white', fontSize: 13}}>TRACK SHIPMENTS</Typography>
                    </ButtonBase>
                
                   
                </Grid>
                <Grid item sm={6} sx={{ backgroundColor: secondTab ? '#424242' :'#607d8b' }}>
                
                    <ButtonBase
                        disableTouchRipple
                        sx={{ p: '14px', display: 'flex', alignItems: 'center', width: '97%',borderBottom: '0.01px solid #757575',justifyContent: 'flex-start' }}
                        onClick={() => {
                            setSecond(!secondTab);
                            setFirst(!firstTab);
                        }}
                    >
                        <DateRangeIcon fontSize="inherit" sx={{color: 'white'}}/>
                     <Typography variant="subtitle2" component="div" sx={{ pl:1, color: 'white', fontSize: 13 }}>
                        FIND YOUR ROUTE & BOOK
                </Typography>
                    </ButtonBase>
               
                </Grid>
               
            </Grid>

            <Grid container sx={{padding: 2}}>
         {
                    firstTab ? 
                     <EmiratesTrack/>        
                        :
                       <UniversalTrack/>
                }
            </Grid>
                
        </Paper>
        
    )
}

export default ActionArea
