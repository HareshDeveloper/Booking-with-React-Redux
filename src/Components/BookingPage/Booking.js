import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import "./Booking.css";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { credential } from "../../Actions/action";
const Booking = () => {
  return (
    <div>
      <BookingBackground />
      <Grid container justifyContent="center">
        <PaperComponent />
      </Grid>
    </div>
  );
};

const PaperComponent = () => {
  const style = {
    padding: 30,
    height: "84vh",
    width: 900,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginTop: "28px",
  };
  const dispatch = useDispatch();
  const [id, setid] = useState("");
  const [amount, setAmount] = useState("");
  const [userName, setuserName] = useState("");
  const [dateOfActivity, setdateOfActivity] = useState("");
  const [bookingDate, setbookingDate] = useState("");
  let credentials = {
    id,
    amount,
    userName,
    dateOfActivity,
    bookingDate,
  };
  const handleBooking = () => {
    console.log('Booking',credentials);
    dispatch(credential(credentials));
  };
  const handleDateChange = (selectedDate) => {
    console.log('selected',selectedDate);
    setdateOfActivity(selectedDate.$d.getDate()+'-'+selectedDate.$d.getMonth()+'-'+selectedDate.$d.getFullYear());
  };
  const handleBookingDate = (selectedDate) => {
    setbookingDate(selectedDate.$d.getDate()+'-'+selectedDate.$d.getMonth()+'-'+selectedDate.$d.getFullYear());
  };

  return (
    <Paper className="paper" elevation={20} style={style}>
      <h2 style={{ margin: "4px" }}>Enter your Id:</h2>
      <TextField
        label="Id"
        style={{ fontFamily: "Times New Roman" }}
        variant="outlined"
        className="id"
        required
        placeholder="Enter your Id"
        onChange={(id) => setid(id.target.value)}
        fullWidth
      />
      <h2 style={{ margin: "4px" }}>Enter your User name:</h2>
      <TextField
        label="User name"
        variant="outlined"
        className="id"
        required
        placeholder="Enter your User name"
        onChange={(name) => setuserName(name.target.value)}
        fullWidth
      />
      <h2 style={{ margin: "4px" }}>Enter your Amount:</h2>
      <TextField
        label="Amount"
        variant="outlined"
        className="id"
        required
        placeholder="Enter the Amount"
        onChange={(amount) => setAmount(amount.target.value)}
        fullWidth
      />
      <h2 style={{ margin: "4px" }}>Select your Date of Activity:</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            onChange={handleDateChange}
            selected={dateOfActivity}
            label="Pick your date"
          />
        </DemoContainer>
        <h2 style={{ margin: "4px" }}>Booking Date:</h2>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            onChange={handleBookingDate}
            selected={bookingDate}
            label="Pick your date"
          />
        </DemoContainer>
      </LocalizationProvider>
      <Link to="/bookedData">
        <Button
          onClick={handleBooking}
          variant="contained"
          className="submitButton"
          disableElevation
        >
          Submit
        </Button>
      </Link>
    </Paper>
  );
};

const BookingBackground = () => {
  return <div className="background"></div>;
};

export default Booking;
