import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Header from '../components/Header';
import { bottomSections , sections} from '../src/constants';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CarouselComponent from '../components/CarouselComponent';
import ContactArea from '../components/ContactArea';
import MapComponent from '../components/MapComponent';
import FooterComponent from '../components/FooterComponent';
import Stack from '@mui/material/Stack';
import ContactForm from '../components/ContactForm';
import  Paper  from '@mui/material/Paper';



export default function SupportPage() {
  
    
  return (
    <Container maxWidth="xl" disableGutters>
      <Header sections={sections} />
     
      <main style={{ background:'linear-gradient(to bottom, #64b5f6, #ffccbc)' /*'#648dae'*/ }}>
        <Container maxWidth="lg" sx={{pt: 20}}>
            <Typography variant="h3" sx={{letterSpacing:-1,color:'white' ,fontStyle:'oblique',pl:5,pb:3}}>Contact us</Typography>
                        <Divider sx={{ borderColor: 'red', borderWidth: 2, width: '20%', ml:5, mb:6}} />
        </Container>

        <Container maxWidth="lg" sx={{ mt: 3 , pb:3}}>
           <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <ContactForm/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Grid item >
                <Paper
                square
                elevation={12}
                sx={{
                    backgroundImage: "url('/contact-hero.png')",
                    width: '100%',
                    position: 'relative',
                    backgroundPosition: '50% 100%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: 750
                }}             
             />
              </Grid>
             
            </Grid>
          </Grid>

        </Container>

      </main>
      <footer>
        <Container maxWidth={false} disableGutters sx={{ boxShadow:13}}>
          <FooterComponent />
           <Box sx={{backgroundColor: '#424242'}}>
                    <Container maxWidth="lg">

                <span style={{display: 'flex'}}>      
                {bottomSections.map((section) => (
            <Box key={section.title} sx={{display:'flex', p:0}}>
               <Link
            color="inherit"
           
            variant="caption"
            href={section.url}
                            sx={{
                                
                                p: 1,
                              flexShrink: 0,
                                fontSize: 11,
                                color: 'white',
                                textDecoration: 'underline',
                                textTransform: 'capitalize',
                                fontWeight: 700
                            }}
          >
            {section.title}
                  </Link>
         <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: 'white'}}/>    
            </Box>      
              ))}
              
              </span>
              
               <Copyright />

                   </Container>
                </Box>
        </Container>
      </footer>

     
    </Container>
  );
}
