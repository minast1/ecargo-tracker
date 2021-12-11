import React from 'react'
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';



const LoadingComponent = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
         <Typography variant="h2">Loading.....</Typography>
        </Box>
    )
}

export default LoadingComponent
