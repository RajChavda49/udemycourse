import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import Home from "./Home";
import "./main.css";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
const Main = () => {
  return (
    <Context>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<SingleMovie />} />

          {/* <Route path="/movies/:id" >
          <Movies />
        </Route> */}
        </Routes>
      </Router>
    </Context>
  );
};

export default Main;
