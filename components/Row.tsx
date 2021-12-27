import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
//import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Order } from '.prisma/client';
import Button  from '@mui/material/Button';
import  DeleteOutline  from '@mui/icons-material/DeleteOutline';
import { convertDate } from '../src/constants';
import { styled } from '@mui/material/styles';
import EditTracker from './EditTracker';
import { useStore } from '../src/orderStore';



export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function Row({ order }: { order: Order }) {
  
  const [open, setOpen] = React.useState(false);
  const handleDelete = () => {
    useStore.getState().deleteItem(order.id);

    fetch(`/api/v2/orders/${order.id}`, {
      method: 'DELETE'
    });
  }

  return (
    <React.Fragment>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {order.createdAt}
        </StyledTableCell>
        <StyledTableCell>{order.awb}</StyledTableCell>
        <StyledTableCell >{order.name}</StyledTableCell>
         <StyledTableCell>{order.phone}</StyledTableCell>
        <StyledTableCell>{order.status}</StyledTableCell>
              <StyledTableCell align="right">
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => handleDelete()}
          >
                      <DeleteOutline/>
                  </Button>
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
            
              <EditTracker order={order}/>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}