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
import { trackerStore } from '../src/dataStore';



export default function RecentTrackings() {
  const trackingData = trackerStore(state => state.trackerData);

  const fetchData = () => {
  
    fetch('/api/v2')
  .then(response => response.json())
  .then(data => data && trackerStore.setState({trackerData : data}));

  }
 
  React.useEffect(() => {

    fetchData();  
  }, [])
 

  return (
    <React.Fragment>
      <Title>Universal Tracking Area</Title>
      <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Date Created</StyledTableCell>
            <StyledTableCell align="right">Tracking Number</StyledTableCell>
            <StyledTableCell align="right">Courier</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trackingData?.map((item) => (
            <Row key={item.id} tracker={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  )}