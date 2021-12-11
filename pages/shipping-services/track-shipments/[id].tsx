import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '../../../src/Link';
import Copyright from '../../../src/Copyright';
import Header from '../../../components/Header';
import { bottomSections , sections} from '../../../src/constants';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import FooterComponent from '../../../components/FooterComponent';
import TrackActionArea from '../../../components/TrackActionArea';
import { useRouter } from 'next/router'
import { useClientSideStore } from '../../../src/orderStore';
import OrderException from '../../../components/OrderException';
import DisplayOrderResults from '../../../components/DisplayOrderResults';


export const getTrackedItem = (trackerId: string) => {
    fetch(`/api/v2/orders/${trackerId}`)
      .then(res => {
        if (!res.ok) { throw res };
          useClientSideStore.setState({ error: null }); //clear errors if theres an order
        return res.json();
      }).then(data => useClientSideStore.setState({ order: data }))
      .catch(err => {
        err.text().then((text: string) => {
          useClientSideStore.setState({order: {}}) // Clear orders if notfoundexception 
          const errMessage = JSON.parse(text);
          useClientSideStore.setState({error: errMessage})
         // setError(errMessage);
         })
    })
  }



const Tracking = () => {
  
  const router = useRouter();
  const { id } = router.query;
  const error = useClientSideStore(state => state.error);
  //const order = useClientSideStore(state => state.order);
  
  React.useEffect(() => {
    getTrackedItem(id as string)
    
  }, [id]);


 // console.log(router.pathname === '/' ? 'home': 'noothome');
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
              {
                error ? <OrderException /> : 
                  
                   <DisplayOrderResults/>
              }
             
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

export default Tracking
