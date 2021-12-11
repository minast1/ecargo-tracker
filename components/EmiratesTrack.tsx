import React from 'react'
import Grid  from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import  Typography  from '@mui/material/Typography';
import JRN from './JRN';
import AWB from './AWB';



const EmiratesTrack = () => {

     const [value, setValue] = React.useState('awb');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    };
    
    return (
          <Grid item container xs={12} spacing={3}>
            <Grid item xs={3}>
                <Typography variant="caption" display="block" gutterBottom sx={{color:'white'}}>
                     Track and trace up to ten shipments at a time by entering either the
                     Job Reference number or the Air Waybill number.
                        </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                 <FormControl component="fieldset">
                                    <RadioGroup
                                        sx={{position : 'relative', bottom : 8}}
                                    aria-label="gender"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                        <FormControlLabel value="awb" control={<Radio size="small" color='error'/>} label={<Typography variant="caption" display="block" sx={{color: 'white'}}>Search by Air Waybill number(AWB)</Typography>} />
                                    <FormControlLabel sx={{position : 'relative', bottom : 8}} value="jrn" control={<Radio  size="small" color='error'/>} label={<Typography variant="caption" sx={{color: 'white'}}>Search by Job Reference number(JRN)</Typography>} />
                                </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs>
                                {
                                    value === 'awb' ?
                                        <AWB /> :
                                        <JRN/>
                                }
                            </Grid>
                        </Grid>
    )
}

export default EmiratesTrack
