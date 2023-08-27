import React from "react";
import "./Login.css";
import { Avatar, Grid, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { signIn } from "../../Actions/action";
import {useDispatch}from'react-redux';
import{ useState } from "react";
import { Link } from "react-router-dom";

const image = "https://images3.alphacoders.com/132/1322308.jpeg";

function BackgroundImage() {
  return (
    <div className="login-container">
      <img className="background" src={image} alt="Login image" />
      <div>
        <Login />
      </div>
    </div>
  );
}

const Login = () => {
  const style = {
    padding: 20,
    width: 300,
    height: "70vh",
    width: 350,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  };
  const dispatch=useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const handleSignIn=()=>{
  dispatch(signIn(email,password));
}

  return (
    <div className="login-form">
      <Grid alignItems="center">
        <Paper elevation={20} style={style}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: "green" }}>
              <LockOutlinedIcon />
            </Avatar>
            <h1>SIGN IN</h1>
            <TextField
              style={{ height: "10vh" }}
              variant="filled"
              value={email}
              label="User Name"
              placeholder="Enter the User Name"
              fullWidth
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              placeholder="Enter your Password"
              variant="filled"
              value={password}
              type="password"
              fullWidth
              required
              onChange={(password)=>setPassword(password.target.value)}
            />
          </Grid>
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <Link to="/booking">
          <Button
            align="center"
            variant="contained"
            style={{ top: "10px" }}
            fullWidth
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          </Link>
          <Typography style={{ marginTop: "11px" }}>
            <Link underline="always" style={{color:"#1976d2"}}>
              Forgot Password ?
            </Link>
          </Typography>
          <h3 style={{marginTop:'10px',textAlign:"center"}}>OR</h3>
          <Link to="/signUp">
          <Button className="signUpButton"  variant="outlined" fullWidth >Sign Up</Button>
          </Link>
        </Paper>
      </Grid>
    </div>
  );
};

export default BackgroundImage;
