import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { airlinePrefix } from '../src/constants';




export default function PrefixTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} stickyHeader  size="small">
        <TableHead>
          <TableRow>
            <TableCell>Airline Name</TableCell>
            <TableCell >Prefix</TableCell>
            <TableCell>Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {airlinePrefix.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.prefix}</TableCell>
              <TableCell align="left">{row.code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
