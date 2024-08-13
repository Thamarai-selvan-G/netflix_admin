import React, { useState } from "react";
import { useEffect } from "react";
import "./ViewAll.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ViewAll = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const moviApi = async () => {
      try {
        await axios
          .get("http://localhost:4000/movie/viewall")
          .then((data) => data.data)
          .then((result) => {
            return setData(result.message);
          });
      } catch (error) {
        console.log(error.massage);
      }
    };
    moviApi();
  }, []);
  data.map((img) => console.log(img.thumpNile));
  return (
    <>
      <div class="parentSpacing">
        <div class="backHome">
          <Link to="/home">
            <h3>
              {" "}
              <IoArrowBack />
              Back to Home
            </h3>
          </Link>
        </div>
        <div class="tableParent">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Movie Name</th>
                <th>Thumbnail</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Released Year</th>
                <th>About</th>
                <th>Edit Data</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value) => (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.movieName}</td>
                  <td>
                    <img src={value.thumpNile} alt={value.movieName} />
                  </td>
                  <td>{value.genre}</td>
                  <td>{value.rating}</td>
                  <td>{value.relesedYear}</td>
                  <td>{value.about}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewAll;
