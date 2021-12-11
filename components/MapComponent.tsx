import React from 'react'
import  Paper  from '@mui/material/Paper';
   


const MapComponent = () => {
    return (
       <Paper elevation={16} sx={{
            backgroundImage: "url('/EKSCmap.svg')",
             width: '100%',
          position: 'relative',
           backgroundPosition: '50% 100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 330
        }} square>

        </Paper>
    )
}

export default MapComponent
