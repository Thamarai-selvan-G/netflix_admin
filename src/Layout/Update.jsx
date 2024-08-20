import "./Home.css";
import Sidenav from "../Components/Sidenav/Sidenav";
import { GrUpload } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Update = () => {
  const slectedArry = useSelector((state) => state.updateData);
  const [data, setData] = useState({});

  useEffect(() => {
    if (slectedArry && slectedArry.length > 0) {
      // Initialize the data state with the selected movie's data
      setData(slectedArry[0]);
    }
  }, [slectedArry]);
// console.log(`redux arry ${slectedArry}`)
// console.log(`redux arry index value ${slectedArry[0]}`)
  function getData(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  console.log(data);
  let updateMovie = async () => {
    try {
      const { id, ...movieData } = data;
      await axios
        .post(`http://localhost:4000/movie/update/${id}`, movieData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {slectedArry &&
        slectedArry.map((val, index) => {
          return (
            <div className="wholeParent" key={index}>
              <div className="nav">
                <Sidenav />
                <div className="contentParent">
                  <div className="contentSpace">
                    <div className="titel">
                      <h2> Update Movie</h2>
                    </div>

                    <div className="inputDiv">
                      <h4>Movie Name</h4>
                      <input
                        id="nameFiled"
                        type="text"
                        name="movieName"
                        placeholder="Name"
                        value={data.movieName || ""}
                        onChange={getData}
                      />
                    </div>

                    <div className="filedCenter">
                      <div className="centerDiv1">
                        <div className="flexDiv">
                          <h4>Movie Released Year</h4>
                          <input
                            type="number"
                            name="releasedYear"
                            id="nameFiled"
                            value={data.releasedYear || ""}
                            onChange={getData}
                          />
                        </div>
                        <div className="flexDiv">
                          <h4>Certificate</h4>
                          <input
                            type="text"
                            id="nameFiled"
                            name="censor"
                            value={data.censor || ""}
                            onChange={getData}
                          />
                        </div>
                        <div className="flexDiv">
                          <h4>Movie Thumbnail</h4>
                          <input
                            id="fileArea"
                            type="file"
                            name="thumbnail"
                            onChange={getData}
                          />
                          <img src={data.thumpNile} alt={data.movieName} />
                        </div>
                      </div>
                      <div className="centerDiv2">
                        <div className="flexDiv">
                          <h4>Movie Genre</h4>
                          <select
                            id="nameFiled"
                            name="genre"
                            value={data.genre || ""}
                            onChange={getData}>
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
                            value={data.rating || ""}
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
                          placeholder="Brief the movie story"
                          value={data.about || ""}
                          onChange={getData}></textarea>
                      </div>
                      <div className="addDiv">
                        <button type="submit" onClick={updateMovie}>
                          Update Movie <GrUpload />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Update;
