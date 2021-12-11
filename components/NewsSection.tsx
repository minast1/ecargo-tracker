import React from 'react'
import  Paper  from '@mui/material/Paper';

const NewsSection = () => {
    return (
        <Paper elevation={16} sx={{
            backgroundImage: "url('/section1bg.png')",
             width: '100%',
          position: 'relative',
           //backgroundPosition: '50% 100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 450
        }} square>

        </Paper>
    )
}

export default NewsSection
