import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import BackgroundImage from "./Components/Login Component/Login";
import SignUpWithBackground from "./Components/SignUp/SignUp";
import "./App.css";
import Booking from "./Components/BookingPage/Booking";
import BookedData from "./Components/BookedData/BookedData";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<BackgroundImage />} />
          <Route path="/signUp" element={<SignUpWithBackground />} />
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/bookedData" element={<BookedData/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
