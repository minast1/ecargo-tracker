import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Status, Order } from '.prisma/client';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import  Button  from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useStore } from '../src/orderStore';
import  Box  from '@mui/material/Box';
import { status } from '../src/constants';






/*const status = [
  { value: 'INFO_RECIEVED', label: 'Info Recieved' },
  { value: 'PENDING', label: 'Pending' },
  { value: 'IN_TRANSIT', label: 'In Transit' },
  { value: 'DELIVERED', label: 'Delivered' },
  { value: 'RETURNED', label: 'Returned' },
  { value: 'SHIPPED', label: 'Shipped' },
  { value: 'PICK_UP', label: 'Ready' },
   {value: 'FAIL_ATTEMPT', label: 'Failed Attempt'}
       
]*/
export default function EditTracker({order}: {order: Order}) {
      const update = useStore(state => state.updateFeilds);

    const [value, setValue] = React.useState<Date>(order.createdAt);
  
    const [trackStatus, setStatus] = React.useState<Status>(order.status);
   // const [message, setMessage] = React.useState(order.message);

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as Status);
  };
     

  const handleUpdate = () => {
      //update the local data immediately, but disable the revalidation
       update(order.id, trackStatus, value)

      //send a request to the API to update the source
       fetch(`/api/v2/orders/${order.id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ status: trackStatus, createdAt:value })
      }).then(response => response.json())
      
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
          //display: 'flex',
         // w/idth: 300,
          //marginTop: 2,
         // 
      }}
         noValidate
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleUpdate()
      }}
      autoComplete="off"
    >
     <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
          value={value}
        onChange={(newValue) => {
          setValue(newValue as Date);
        }}
                  renderInput={(params) => <TextField {...params} size="small" sx={{width: 150, mr:2}}/>}
      />
    </LocalizationProvider>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                   sx={{mr:2 }}
          size="small"
          
          labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={ handleStatusChange}
          //defaultValue={trackStatus}
          value={trackStatus as Status}
          label="Status"
              >
                  {
                      status.map((item, index) =>
                          
                          <MenuItem key={index} value={item.value}>{item.label }</MenuItem>
                      )
        }
        
        </Select>
          </FormControl>
        
          <Button
        size="small"
        sx={{ width: '10%' }}
        type="submit"
              //onClick={handleUpdate}
              variant="contained"
          >Submit</Button>
    </Box>
  );
}
