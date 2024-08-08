import React from "react";
import Home from "../Layout/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import TVShows from "../Layout/TVShows";
import MyList from "../Layout/MyList";
import Browser from "../Layout/Browser";
import NewAndPopular from "../Layout/NewAndPopular";
import Movie from "../Layout/Movie";
import Mylogin from "../Layout/Mylogin";
import User from "../Layout/User";
function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Mylogin />} />
          <Route path="/user" element={<User />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/movie" element={<Movie />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/myList" element={<MyList />} />
          <Route path="/browse" element={<Browser />} />
          <Route path="/newAndPopular" element={<NewAndPopular />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default RouterPage;
