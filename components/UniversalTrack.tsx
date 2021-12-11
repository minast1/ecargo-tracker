import React from 'react'
import Grid  from '@mui/material/Grid';
import  Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
//import FormHelperText from '@mui/material/FormHelperText';
import { courierList } from '../src/constants';
import { cleintTrackerStore } from '../src/dataStore';
import { useRouter } from 'next/router'



const UniversalTrack = () => {
    const router = useRouter();
    const [courier, setCourier] = React.useState('');
    const [trackin, changeTrackin] = React.useState('');
    
    
    const handleChange = (event: SelectChangeEvent) => {
        setCourier(event.target.value as string);
        
    };
    
    const handleTrackingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeTrackin(event.target.value);
        
    }
    return (
         <Grid item container xs={12} spacing={3}>
            <Grid item xs={3}>
                <Typography variant="caption" display="block" gutterBottom sx={{color:'white'}}>
                     Track and trace shipments by selecting the preferred courier service and the
                     Tracking or Reference number.
                        </Typography>
                            </Grid>
                            <Grid item xs>
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
                        cleintTrackerStore.setState({ trackerData: { courier: courier, tracking_number: trackin } });
                        router.push("/shipping-services/track-shipments");
                    }}
                                    >
                    <Input placeholder="Enter your Tracking number"
                        sx={{ width: '30%', color: 'white', fontSize: 15, fontStyle: 'oblique' }}
                        onChange={handleTrackingChange}/>
                                  
                                   <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                        <InputLabel id="demo-simple-select-standard-label" sx={{color:'white', fontSize:15, pb:2}}>Select Courier</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                         value={courier}
                                         sx={{color:'white', fontStyle:"oblique", fontSize:15}}
                                        onChange={(event) => handleChange(event)}
                                        label="Courier *"
                                        >
                                       
                            {
                                courierList.map((item, index) =>
                                    
                                    <MenuItem key={index} value={item.value}>{item.label }</MenuItem>
                                    )
                            }
                                        
                                        </Select>
    
                                    </FormControl>
                                    <Button disabled={trackin.length < 8 } variant="contained" type="submit" color="success" sx={{width: '28%'}}>TRACK</Button>

                                </Box>
                            </Grid>
                           
                        </Grid>
    )
}

export default UniversalTrack
