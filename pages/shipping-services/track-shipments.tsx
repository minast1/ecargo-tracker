import * as React from 'react';
import Container from '@mui/material/Container';
//import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//import ProTip from '../src/ProTip';
import Link from '../../src/Link';
import Copyright from '../../src/Copyright';
import Header from '../../components/Header';
import { bottomSections , sections} from '../../src/constants';
import Divider from '@mui/material/Divider';
//import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
//import ContactArea from '../../components/ContactArea';
import FooterComponent from '../../components/FooterComponent';
import TrackActionArea from '../../components/TrackActionArea';
import { cleintTrackerStore,  trackingQueryResultStore } from '../../src/dataStore';
import DisplayTrackResults from '../../components/DisplayTrackResults';


const UniversalTracking = () => {
  const trackedItem = cleintTrackerStore(state => state.trackerData);
  //const trackingQueryResult = trackingQueryResultStore(state => state.trackerResult)

  const getTrackedItem = () => {
    fetch('/api/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trackedItem)
      })
  .then(response => response.json())
  .then(data => data && trackingQueryResultStore.setState({trackerResult: data}));

  }

  React.useEffect(() => {
    getTrackedItem()
    
  }, []);

    return (
        <Container maxWidth="xl" disableGutters>
      <Header sections={sections} />
      
      <main style={{ background:'linear-gradient(to bottom, #648dae, #ffccbc)', paddingTop: '100px'}}>
       
                  <Container maxWidth="lg" sx={{mt:3, pb:3 }}>
                   <TrackActionArea />
                 </Container>
        <Container maxWidth="lg" sx={{ mt: 3, pb:3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DisplayTrackResults/>
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
    )
}

export default UniversalTracking
