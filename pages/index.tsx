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
import ActionArea from '../components/ActionArea';
import NewsSection from '../components/NewsSection';
import Sidebar from '../components/Sidebar';
import NewsComponent from '../components/NewsComponent';
import CarouselComponent from '../components/CarouselComponent';
import ContactArea from '../components/ContactArea';
import MapComponent from '../components/MapComponent';
import FooterComponent from '../components/FooterComponent';

//import ebackground from '../public/ebackground.jpg'


export default function Index() {
  
    
  return (
    <Container maxWidth="xl" disableGutters>
      <Header sections={sections} />
      <main>
        <Container maxWidth="xl" disableGutters sx={{
          backgroundImage: "url('/ebackground.jpg')",
          width: '100%',
          position: 'relative',
          backgroundPosition: '50% 100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 400
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '25%', ml: 15, pt: 10 }}>
            <Typography variant="h3" component="div" gutterBottom sx={{
              fontWeight: 'regular',
              fontStyle: 'oblique',
              color: 'white',
              letterSpacing: '1px',
              fontStretch: 'expanded',
              fontFamily: 'roboto'

            }}> {'Global trade facilitators'}</Typography>

            <Divider flexItem sx={{ backgroundColor: 'red', borderWidth: 2, width: '50%' }} />
            <Grid container spacing={1} sx={{ pt: 5 }}>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Button variant="contained" color="success">BOOK NOW</Button>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Button variant="contained" color="success">GET QUOTE</Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
      <main style={{ background:'linear-gradient(to bottom, #648dae, #ffccbc)' /*'#648dae'*/ }}>
        <Container maxWidth="lg">
          <ActionArea />
        </Container>

        <Container maxWidth="lg" sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <NewsSection />
            </Grid>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item >
                <Sidebar />
              </Grid>
              <Grid item>
                <NewsComponent />
              </Grid>
            </Grid>
          </Grid>

        </Container>

        <Container maxWidth="lg" sx={{ mt: 3 }}>
          <CarouselComponent />
        </Container>

        <Container maxWidth="lg" sx={{ mt: 3, pb:3 }}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <ContactArea title="OUR WORLDWIDE OFFICES"/>
            </Grid>
            <Grid item xs>
              <MapComponent />
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
