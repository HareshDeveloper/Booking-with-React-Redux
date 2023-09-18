import React from "react";
import { connect } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Autocomplete from "@mui/material/Autocomplete";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import UpdateBooking from "../BookingPage/Update";
import { deleteBooking } from "../../Actions/action";
import "./BookedData.css";

class BookedData extends React.Component {
  handleFilter = (event) => {
    if (event.target.value === 1) {
      this.setState({ filternum: 1 });
    } else if (event.target.value === 2) {
      this.setState({ filternum: 2 });
    } else if (event.target.value === 0) {
      this.setState({ filternum: 0 });
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      suggestions: props.data,
      filternum: 0,
    };
  }

  // handleSuggestionClick = (suggestion) => {
  //   this.setState({ suggestions: this.props });
  // };

  AutoComplete = (event, newValue) => {
    const { data: bookings } = this.props;
    const input = newValue || "";
    const filteredSuggestions = bookings.filter((booking) =>
      booking.username.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({ suggestions: filteredSuggestions });
  };

  deleteBooking = (index) => {
    const { data: bookings } = this.props;
    console.log("deleteBD", index);
    this.props.dispatch(deleteBooking(index));
    this.setState({ suggestions: bookings });
  };

  searchBar = () => {
    const { suggestions } = this.state;
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Stack className="searchBarContainer" spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={suggestions.map((option) => option.username)}
            onInputChange={this.AutoComplete}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Avatar className="icon">
                        <SearchIcon />
                      </Avatar>
                    </InputAdornment>
                  ),
                  type: "search",
                }}
              />
            )}
          />
        </Stack>
        {this.filter()}
      </div>
    );
  };

  handleUpdateId = (index) => {
    console.log("id", index);
    return <UpdateBooking num={index} />;
  };
  filter = () => {
    return (
      <FormControl
        className="filter"
        variant="filled"
        sx={{ m: 1, minWidth: 150 }}
      >
        <InputLabel id="demo-simple-select-filled-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={this.state.filternum}
          onChange={this.handleFilter}
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={1}>Low to High</MenuItem>
          <MenuItem value={2}>High to Low</MenuItem>
        </Select>
      </FormControl>
    );
  };
  render() {
    const { data } = this.props;
    let sortedData = this.state.suggestions;
    console.log("Fs", this.state.suggestions);
    if (this.state.filternum === 1) {
      console.log(1);
      sortedData = sortedData.sort((a, b) => a.amount - b.amount);
    } else if (this.state.filternum === 2) {
      console.log(2);
      sortedData = sortedData.sort((a, b) => b.amount - a.amount);
    } else {
      console.log(0);
      sortedData = sortedData.sort((a, b) => a.id - b.id);
    }
    let dataToDisplay = sortedData || data;
    console.log("DTD", dataToDisplay);
    return (
      <div className="content">
        {this.searchBar()}
        <TableContainer component={Paper} className="tableContainer">
          <Table
            className="table"
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Booked Date</TableCell>
                <TableCell>Date of Activity</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {dataToDisplay.map((booking, index) => (
                <TableRow
                  key={booking.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {booking.id}
                  </TableCell>
                  <TableCell>{booking.username}</TableCell>
                  <TableCell>{booking.amount}</TableCell>
                  <TableCell>{booking.bookingDate}</TableCell>
                  <TableCell>{booking.dateOfActivity}</TableCell>
                  <TableCell>
                    <Link to={`/updateBooking/${index}`}>
                      <Button
                        style={{ backgroundColor: "green" }}
                        onClick={() => this.handleUpdateId(booking.id)}
                        variant="contained"
                      >
                        Update
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/bookedData">
                      <Button
                        style={{ backgroundColor: "red" }}
                        onClick={() => this.deleteBooking(booking.id)}
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.bookingReducer.bookings,
});

export default connect(mapStateToProps)(BookedData);
