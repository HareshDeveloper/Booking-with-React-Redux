import React from "react";
import "./SignUp.css";
import { Avatar, Grid, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { signUp } from "../../Actions/action";
import { useDispatch } from "react-redux";
import { useState } from "react";

const image = "https://images3.alphacoders.com/132/1322308.jpeg";

function SignUpWithBackground() {
  return (
    <div className="login-container">
      <img className="background" src={image} alt="Login image" />
      <div>
        <SignUpData />
      </div>
    </div>
  );
}

const SignUpData = () => {
  const style = {
    padding: 20,
    width: 300,
    height: "70vh",
    width: 350,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  };
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    dispatch(signUp(email, firstName, password, lastName));
  };

  return (
    <div className="login-form">
      <Grid alignItems="center">
        <Paper elevation={20} style={style}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: "green" }}>
              <LockOutlinedIcon />
            </Avatar>
            <h1>SIGN UP</h1>
            <TextField
              variant="filled"
              value={firstName}
              label="First name"
              placeholder="Enter your First name"
              fullWidth
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last name"
              placeholder="Enter the Last Name"
              variant="filled"
              value={lastName}
              fullWidth
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              label="Email"
              placeholder="Enter your email"
              variant="filled"
              value={email}
              fullWidth
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              style={{ marginBottom: "15px" }}
              label="Password (6 or more characters)"
              placeholder="Enter your Password"
              variant="filled"
              type="password"
              value={password}
              fullWidth
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Button
            align="center"
            variant="contained"
            style={{ top: "10px" }}
            fullWidth
            onClick={handleSignUp}
          >
            Click here to Sign Up
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default SignUpWithBackground;
