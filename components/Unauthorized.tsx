import React from 'react'
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';
import  Link  from "../src/Link";



const Unauthorized = () => {
    return (
       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Typography variant="h6">
                Please <Link href="/admin-area"> Sign In</Link> to Access this Page!
            </Typography>
        </Box>
    )
}

export default Unauthorized
