import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Title from './Title';
//import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Row, { StyledTableCell} from './Row';
import { useStore } from '../src/orderStore';




export default function RecentOrders() {
  const orders = useStore(state => state.orders);
   
  const fetchData = () => {
  
    fetch('/api/v2/orders')
  .then(response => response.json())
  .then(data => data && useStore.setState({orders : data}));

  }
 
  React.useEffect(() => {

    fetchData();  
  }, [])
 

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <TableContainer component={Paper}>
      <Table aria-label="customized table" size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Estimated Delivery DateTime</StyledTableCell>
            <StyledTableCell align="right"> AWBTracking Number</StyledTableCell>
            <StyledTableCell align="right">Client Email</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { orders?.map((order) => (
            <Row key={order.id} order={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  )}