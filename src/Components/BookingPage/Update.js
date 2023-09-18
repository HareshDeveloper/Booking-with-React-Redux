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
import { updateCredential } from "../../Actions/action";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const UpdateBooking = () => {
  const { id } = useParams();
  console.log("onum", id);
  if (id) {
    return (
      <div>
        <BookingBackground />
        <Grid container justifyContent="center">
          <PaperComponent num={id} />
        </Grid>
      </div>
    );
  }
};

const PaperComponent = ({ num }) => {
  console.log("number", num);
  const style = {
    padding: 30,
    height: "84vh",
    width: 900,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginTop: "28px",
  };
  const bookingState = useSelector((state) => state.bookingReducer);
  const updateData = bookingState.bookings[num];
  console.log("updated", updateData);
  const activityDateParts = updateData.dateOfActivity.split("-");
  const defaultYear = parseInt(activityDateParts[2], 10);
  const defaultMonth = parseInt(activityDateParts[1], 10) - 1;
  const defaultDay = parseInt(activityDateParts[0], 10);
  var doa = new Date(defaultYear, defaultMonth, defaultDay);
  const defaultDateParts = updateData.bookingDate.split("-");
  const Year = parseInt(defaultDateParts[2], 10);
  const Month = parseInt(defaultDateParts[1], 10) - 1;
  const Day = parseInt(defaultDateParts[0], 10);
  var booking = new Date(Year, Month, Day);
  const dispatch = useDispatch();
  const [id, setid] = useState(updateData.id);
  const [amount, setAmount] = useState(updateData.amount);
  const [userName, setuserName] = useState(updateData.username);
  var [dateOfActivity, setdateOfActivity] = useState(`$d:${doa.toISOString()}`);
  var [bookingDate, setbookingDate] = useState(`$d:${booking.toISOString()}`);
  console.log("DOA", dateOfActivity);
  console.log("BD", bookingDate);
  let credentials = {
    id,
    amount,
    userName,
    dateOfActivity,
    bookingDate,
  };
  const handleBooking = () => {
    console.log("Update", credentials);
    dispatch(updateCredential(credentials));
  };
  const handleDateChange = (selectedDate) => {
    console.log("selected", selectedDate);
    setdateOfActivity(
      selectedDate.$d.getDate() +
        "-" +
        selectedDate.$d.getMonth() +
        "-" +
        selectedDate.$d.getFullYear()
    );
  };
  const handleBookingDate = (selectedDate) => {
    setbookingDate(
      selectedDate.$d.getDate() +
        "-" +
        selectedDate.$d.getMonth() +
        "-" +
        selectedDate.$d.getFullYear()
    );
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
        onChange={(e) => setid(e.target.value)}
        value={id}
        InputProps={{
          disabled: true,
        }}
        fullWidth
      />
      <h2 style={{ margin: "4px" }}>Enter your User name:</h2>
      <TextField
        label="User name"
        variant="outlined"
        className="id"
        required
        placeholder="Enter your User name"
        onChange={(e) => setuserName(e.target.value)}
        value={userName}
        fullWidth
      />
      <h2 style={{ margin: "4px" }}>Enter your Amount:</h2>
      <TextField
        label="Amount"
        variant="outlined"
        className="id"
        required
        placeholder="Enter the Amount"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        fullWidth
      />
      <h2 style={{ margin: "4px" }}>Select your Date of Activity:</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            onChange={handleDateChange}
            selected={doa}
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
          Update
        </Button>
      </Link>
    </Paper>
  );
};

const BookingBackground = () => {
  return <div className="background"></div>;
};

export default UpdateBooking;
