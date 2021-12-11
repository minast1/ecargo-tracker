import React from 'react'
import  Paper  from '@mui/material/Paper';
import  Divider  from '@mui/material/Divider';
import Typography  from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Container  from '@mui/material/Container';
import Box from '@mui/material/Box';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TableComponent from './TableComponent';



const FooterComponent = () => {
    return (
       <Paper square sx={{backgroundColor: '#eceff1', p:1, boxShadow:13}} elevation={12}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={4}>
            <Typography sx={{ fontSize: '28px',letterSpacing:0, fontStyle:'oblique',pl:1,pb:2, pt:2}}>About us </Typography>
                        <Divider sx={{ borderColor: 'red', borderWidth: 2, width: '40%' }} />
                         <Typography variant="caption" display="block" gutterBottom sx={{pr:4, color:'gray', pl:1, mt:2}}>
                            Established in 1985 as the airfreight division of Emirates, we are the largest international
                            cargo airline in the world. We connect the world's supply chains through 300+
                            destinations across 80 countries in 6 continents through Emirates SkyCentral,
                            our operations hub at Dubai International Airport (DXB) and Dubai World Central (DWC).
                        </Typography>

                        <Typography variant="caption" display="block" gutterBottom sx={{ pr: 4, color: 'gray', pl: 1, mt: 2 }}>
                            For more information, <span style={{color: 'red', textDecoration:'underline'}}>contact us</span>
                    </Typography>
                        <Box sx={{display:'flex', mt:2, alignItems:'center'}}>
                            <YouTubeIcon fontSize="large" sx={{ mr: 1 }}/>
                            <FacebookIcon fontSize="medium" sx={{ mr: 1 }}/>
                            <TwitterIcon fontSize="medium" sx={{ mr: 1 }}/>
                            <LinkedInIcon fontSize="medium" sx={{ mr: 1 }}/>
                       </Box>
                    </Grid>

                    <Grid item xs>
                        <TableComponent/>
                    </Grid>
                </Grid>
            </Container>
            
       </Paper>
    )
}

export default FooterComponent
