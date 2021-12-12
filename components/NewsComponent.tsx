import React from 'react'
import  Paper from '@mui/material/Paper';
//import  Grid  from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import Divider  from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { fetcher, text_truncate, resType, convertDate } from '../src/constants';
import Link from '../src/Link';
import useSWR from 'swr'





const queryString = 'https://inshortsv2.vercel.app/news?type=world'
const NewsComponent = () => {
      const { data } = useSWR<resType>(queryString, fetcher);
        
    return (
         <Paper square sx={{backgroundColor: '#d7ccc8', p:1}} elevation={16}>
           <Typography gutterBottom sx={{fontSize: 12, fontWeight: 'bold',pb:1}}>NEWS ARCHIVE </Typography>
            <Divider />
                <List sx={{ width: '100%' }}>
                      {
                            data?.articles.filter((_item, i) => i <= 3).map((newsItem, i) => 
                            
                                   <ListItem alignItems="flex-start" key={i}>
                                <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src={newsItem.image_url} variant="square" sx={{width:75, height: 55, mr:2}}/>
                            </ListItemAvatar>
                           <ListItemText            
                              primary={convertDate(newsItem.created_at)}
                              secondary={
                             <React.Fragment>
                              <Link href={newsItem.source_url} underline="hover">
                                 <Typography
                              sx={{ display: 'block', '&:hover': {color : 'red'}}}
                              component="span"
                                variant="caption"          
                               color="text.primary"
                                  >
                       {  text_truncate(newsItem.title)}
                           </Typography>      
                               </Link>
                            </React.Fragment>
                        }
                      />
                </ListItem>
                          
                            )
                     }
     
      </List>
       </Paper>
    )
}

export default NewsComponent
