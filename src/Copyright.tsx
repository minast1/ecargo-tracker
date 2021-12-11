import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Copyright() {
  return (
    <Box sx={{ display: 'flex', alignItems:'flex-start'}}>
<Typography variant="caption" gutterBottom sx={{color:'gray'}} align="center">
      © 2021 Emirates SkyCargo. All rights reserved.
    </Typography>
    </Box>
    
  );
}
