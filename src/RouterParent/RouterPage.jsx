import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Mylogin from "../Layout/Mylogin";
import Home from "../Layout/Home";
import ViewAll from "../Layout/ViewAll";
import Update from "../Layout/Update";

function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Mylogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/viewAll" element={<ViewAll/>} />
          <Route path = "/update" element = {<Update/>}/>
       
        </Routes>
      </Router>
    </div>
  );
}

export default RouterPage;
