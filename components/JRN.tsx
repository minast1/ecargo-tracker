import React from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



function JRN() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
                alignSelf: 'flex-start',
                display: 'flex',
                //border: '1px solid blue'
            }}
            noValidate
            autoComplete="off"
            >
            <Input placeholder="Enter your JRN number"  sx={{ width: '50%' ,color: 'white', fontSize: 13, fontStyle: 'oblique'}} />
            <Button variant="contained" disabled   color="success" sx={{width: '28%'}}>TRACK</Button>

        </Box>
    )
}

export default JRN
