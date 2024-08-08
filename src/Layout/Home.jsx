import React, { useState } from "react";
import Sidenav from "../Components/Sidenav/Sidenav";
import "./Home.css";
import { GrUpload } from "react-icons/gr";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({
    movieName: "",
    relesedYear: "",
    genre: "",
    censor: "",
    thumpNile: "",
    movieVideo: "",
    about: "",
    rating: "",
  });

  function getData(e) {
    let myName = e.target.name;
    let myValue = e.target.value;

    setData({ ...data, [myName]: myValue });
  }

  const storeData = async () => {
    let movieData = {
      movieName: data.movieName,
      relesedYear: data.relesedYear,
      genre: data.genre,
      censor: data.censor,
      thumpNile: data.thumpNile,
      about: data.about,
      rating: data.rating,
    };

    let result = await axios.post("http://localhost:4000/movie/moviecreate",movieData)
      console.log(result);
      if (!result) {
        console.log("api error");
      }
      return console.log('Data uploaded sucesfull....');
  

  };

  return (
    <div>
      <div className="wholeParent">
        <div className="nav">
          <Sidenav />
          <div className="contentParent">
            <div className="contentSpace">
              <div className="titel">
                <h2> Add Products</h2>
              </div>

              <div className="inputDiv">
                <h4>Movie Name</h4>
                <input
                  id="nameFiled"
                  type="text"
                  name="movieName"
                  placeholder="Name"
                  onChange={getData}
                />
              </div>

              <div className="filedCenter">
                <div className="centerDiv1">
                  <div className="flexDiv">
                    <h4>Movie Released Year</h4>
                    <input
                      type="number"
                      name="relesedYear"
                      id="nameFiled"
                      onChange={getData}
                    />
                  </div>
                  <div className="flexDiv">
                    <h4>Certificate</h4>
                    <input
                      type="text"
                      id="nameFiled"
                      name="censor"
                      onChange={getData}
                    />
                  </div>
                  <div className="flexDiv">
                    <h4>Movie Thumbnail</h4>
                    <input
                      id="fileArea"
                      type="file"
                      name="thumpNile"
                      onChange={getData}
                    />
                  </div>
                </div>
                <div className="centerDiv2">
                  <div className="flexDiv">
                    <h4>Movie Genre</h4>
                    <select id="nameFiled" name="genre" onChange={getData}>
                      <option value="">Select Genre</option>
                      <option value="Action">Action</option>
                      <option value="Romance">Romance</option>
                      <option value="Horror">Horror</option>
                      <option value="Comedy">Comedy</option>
                    </select>
                  </div>
                  <div className="flexDiv">
                    <h4>Rating</h4>
                    <input
                      type="text"
                      id="nameFiled"
                      name="rating"
                      onChange={getData}
                    />
                  </div>
                  <div className="flexDiv">
                    <h4>Trailer or Teaser</h4>
                    <input
                      type="file"
                      id="fileArea"
                      name="movieVideo"
                      onChange={getData}
                    />
                  </div>
                </div>
              </div>
              <div className="filedEnd">
                <div className="filedEndDiv1">
                  <h4>Movie Plot</h4>
                  <textarea
                    className="plotArea"
                    name="about"
                    onChange={getData}
                    placeholder="Brief the movie story"></textarea>
                </div>
                <div className="addDiv">
                  <button type="submit" onClick={storeData}>
                    Add Product <GrUpload />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
