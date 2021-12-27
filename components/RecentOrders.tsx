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
import TablePagination from '@mui/material/TablePagination';
import TableFooter  from '@mui/material/TableFooter';



export default function RecentOrders() {
  const orders = useStore(state => state.orders);
  const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value,5));
    setPage(0);
  };



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
            <StyledTableCell> AWBTracking Number</StyledTableCell>
              <StyledTableCell>Order Name</StyledTableCell>
               <StyledTableCell>Client Tel</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {(rowsPerPage > 0
              ? orders?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
             : orders).map((order) => (
            <Row key={order.id} order={order} />
          ))}
          </TableBody> 
        </Table>
      </TableContainer>
     
            <TablePagination
              //sx={{display:'flex', ml:'auto'}}
           component="div"
          count={orders.length}
         page={page}
         onPageChange={handleChangePage}
         rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
    />
    
    </React.Fragment>
  )}