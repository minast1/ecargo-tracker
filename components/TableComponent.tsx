import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';



function createData(
  name: string,
  calories: string,
  fat?: string,
  carbs?: string,
) {
  return { name, calories, fat, carbs};
}

const rows = [
  createData('Network', 'Contact','Airfreight', 'Media center'),
  createData('Fleet', 'FAQs', 'Pharma', 'Careers'),
  createData('Facilities', 'Feedback and complaints', 'Fresh', ''),
  createData('Equipment', '', 'Live', ''),
    createData('Awards', '','Safe', ''),
    createData('Accreditation', '', 'Specialty', ''),
    createData('Corporate social responsibility', ''
    , 'Charter', ''),
     createData('','', 'Pets', ''),
];

export default function TableComponent() {
  return (
    <TableContainer  sx={{backgroundColor: '#eceff1'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>about us</TableCell>
            <TableCell align="right">shipping support</TableCell>
            <TableCell align="right">Products</TableCell>
            <TableCell align="right">others</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell size="small" component="th" scope="row">
                      <Typography sx={{fontSize:10}} display="block">{row.name}</Typography>
              </TableCell>
                  <TableCell align="right" size="small"> <Typography sx={{fontSize:10}} display="block">{row.calories}</Typography></TableCell>
                  <TableCell align="right" size="small"><Typography sx={{fontSize:10}} display="block">{row.fat}</Typography></TableCell>
                  <TableCell align="right" size="small"><Typography sx={{fontSize:10}} display="block">{row.carbs}</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
