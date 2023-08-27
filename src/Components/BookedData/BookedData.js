import React from 'react';
import { connect } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./BookedData.css";
class BookedData extends React.Component {
  render() {
    const { data } = this.props;
  console.log('BookedData',data);
    return (
      <TableContainer component={Paper} className='tableContainer'>
        <Table className='table' sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">user name</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">booking Date</TableCell>
              <TableCell align="right">Date of Activity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className='tableBody'>
            {data.map((booking) => (
              <TableRow
                key={booking.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {booking.id}
                </TableCell>
                <TableCell align="right" >{booking.username}</TableCell>
                <TableCell align="right">{booking.amount}</TableCell>
                <TableCell align="right">{booking.bookingDate}</TableCell>
                <TableCell align="right">{booking.dateOfActivity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const bookings = (state) => ({
  data: state.bookingReducer.bookings
});

export default connect(bookings)(BookedData);
