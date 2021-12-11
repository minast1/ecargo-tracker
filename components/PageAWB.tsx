import React from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { getTrackedItem } from '../pages/shipping-services/track-shipments/[id]';


const PageAWB = () => {

    //const router = useRouter();
    const [prefix, setPrefix] = React.useState<string>('');
    const [trackNum, setTrackNum] = React.useState<string>('');
  
    
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
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
               event.preventDefault();
                const trackingNumber = prefix.concat("-", trackNum);
                getTrackedItem(trackingNumber);
                     
                  }}
            >
            <Input
                placeholder="AWB prefix"
                sx={{ width: '17%', color: 'white', fontSize: 13, fontStyle: 'oblique' }}
                value={prefix}
                 inputProps={{
                   maxLength: 3
                   }}
                onChange={(event) => setPrefix(event.target.value)}
            />
            <Input
                placeholder="Enter your AWB number"
                sx={{ color: 'white', fontSize: 13, fontStyle: 'oblique' }}
                value={trackNum}
                 inputProps={{
                    maxLength: 8
                   }}
                onChange={(event) => setTrackNum(event.target.value)}
            />
            <Button variant="contained" type="submit" color="success" sx={{width: '28%'}}>TRACK</Button>

        </Box>
    )
}

export default PageAWB
