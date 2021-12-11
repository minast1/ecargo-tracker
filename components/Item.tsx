import  Typography from '@mui/material/Typography'
import Paper  from '@mui/material/Paper'
import Box  from '@mui/system/Box'
import React from 'react'
import Divider  from '@mui/material/Divider'
import { Button } from '@mui/material'

interface AppProps {
    name: string
    description: string
    image: string
}

const Item = ({name, description, image}:AppProps) => {
    // { name, description, image } = item;
    return (
        <Paper square sx={{ width: '100%', height: 650,position:'relative', boxShadow: 3}}>
             <img src={image} style={{ position: 'relative', backgroundSize: 'cover', backgroundRepeat:'no-repeat'}}/>
                
            <Box  sx={{
                 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position:'absolute',
                width: '45%',
                ml: 7,
                mt: 6,
                top: '8px',
                left: '16px'
                
            }}>
                <Typography  sx={{fontSize:'58px' ,fontStyle:'oblique', pb: 1, color:'white'}} component="span">{name}</Typography>
                <Divider sx={{ borderColor: 'red', borderWidth: 2, width: '40%' }} />
                
                <Typography  variant="subtitle1" sx={{fontWeight:'bold', pt:4, color:'white', pr:1, pb:1}} component="span">{ description}</Typography>
                  <Button variant="contained">LEARN MORE</Button>
            </Box>
        </Paper>
    )
}

export default Item
