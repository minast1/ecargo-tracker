import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Status } from '.prisma/client';
import FormHelperText from '@mui/material/FormHelperText';
import { orderSchema, status } from '../src/constants';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Controller,SubmitHandler,useForm } from "react-hook-form";
import { useStore } from '../src/orderStore';


type OFormInput = {
    email: string
    phone: string
    prefix: string
    track_number: string
    status: Status
}
export default function OrderForm() {

const { control, handleSubmit, reset, setValue, register, formState: { errors } } = useForm<OFormInput>({
    resolver: yupResolver(orderSchema)
});
    const addItem = useStore(state => state.addItem);
   // const [orderStatus, _setStatus] = React.useState<Status>('INFO_RECIEVED');
   
    const onSubmit: SubmitHandler<OFormInput> = (data) => {
        const {track_number, status, prefix, phone, email } = data;
        const awb = prefix.concat("-", track_number) // Join the prefix to the generated number to form the jwb
        const orderData = { email: email, phone: phone, awb: awb, status: status };

        fetch('/api/v2/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        }).then(response => response.json()).
            then(data => addItem(data));
         reset()
     }
    const handleTrackinChange = () => {
        const tValue = generateTrackingNumber();
        setValue('track_number', tValue);

    }
    
    const generateTrackingNumber = (): string => {
        const min = Math.ceil(10000000);
        const max = Math.floor(90000000);
        const tNumber = Math.floor(Math.random() * (max - min) + min);
        //setRand(tNumber.toString());
        return tNumber.toString();
    }
    

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
          autoComplete="off"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
    >
          <div>
              <Controller
                  name="email"
                  control={control}
                  render={({ field: { value } }) =>
              
                      <TextField
                          required
                          {...register("email")}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                          defaultValue={value}
                          sx={{width:'48%'}}
                          id="outlined-required"
                          size="small"
                          label="Client Email"
                          placeholder="example@gmail.com"
                      />
                  }
              />
              <Controller
                  name="phone"
                  control={control}
                  render={({ field: { value } }) =>
              
                      <TextField
                          required
                          {...register("phone")}
                          error={!!errors.phone}
                          helperText={errors.phone?.message}
                           sx={{width:'25%'}}
                            defaultValue={value}
                          id="outlined-required"
                          size="small"
                          placeholder="222-2222-222"
                          label="Client Telephone"
                      />
                  }
              />
              <Controller
                  name="prefix"
                  control={control}
                  
                  render={({ field: { value } }) =>
              
                      <TextField
                          required
                          {...register("prefix")}
                          error={!!errors.prefix}
                           helperText={errors.prefix?.message}
                           sx={{width:'15%'}}
                          id="outlined-required"
                          size="small"
                          label="Awb Prefix"
                        defaultValue={value}
                          placeholder="001"
                      />
                  }
              />
              <Divider sx={{ mt: 2, mb: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Controller
                          name="track_number"
                          
                          control={control}
                          render={({field: {value}}) =>
              
                              <TextField
                                {...register("track_number")}
                                  fullWidth
                                  InputProps={{
                                      readOnly: true,
                                  }}
                                  id="outlined-required"
                                  //defaultValue={'xxxxxxxx'}
                                  value={value}
                                  error={!!errors.track_number}
                                  placeholder='Generate code'
                                  helperText={errors.track_number?.message}
                                   sx={{width:'50%'}}
                                  size="small"
                                  label="Tracking Number"
                              />
                          }
                      />
                       
                     
                      <Controller
                          name="status"
                          control={control}
                          defaultValue={
                              'INFO_RECIEVED' as Status
                          }
                              
                          render={({ field: { onChange, value, onBlur } }) => (
                              <FormControl sx={{ mt: 1, ml: 4 }}>
                                  <InputLabel>Status</InputLabel>
                                  <Select
                                      label="Status"
                                      size="small"
                                      value={value}
                                      onChange={onChange}
                                      onBlur={onBlur}
                                  >
                                      {
                                          status.map((item, index) =>
                          
                                              <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                          )
                                      }
                                  </Select>
                                  <FormHelperText>With label + helper text</FormHelperText>
                              </FormControl>
                          )}/>
                                 
                  </Box>
                  
                   <Button size="small" onClick={handleTrackinChange} sx={{mt:1, width: '40%'}} variant="contained">Generate Tracking Number</Button>
                 
              </Box>
              <Divider sx={{ my: 3 }} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                   <Button size="small" type="submit" color="warning" variant="contained">Submit Order</Button>
              </Box>
             
             
      </div>
     
    </Box>
  );
}
