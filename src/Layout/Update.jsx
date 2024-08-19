import "./Home.css";
import Sidenav from "../Components/Sidenav/Sidenav";
import { GrUpload } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";


const Update = () => {
  const [data, setData] = useState([]);
  // const [update,setUpdate]= useState({})
  const slectedArry = useSelector((state) => state.updateData);

  useEffect(() => {
    if (slectedArry) {
      setData(slectedArry);
    }
  }, [slectedArry]);

  function getData(e) {
    const {name,value} = e.target;
    setData({...data,[name]:value})
  }
 console.log(getData);
 console.log(data);
 
 
  let updateMovie = async()=>{
    try {

      
      
    } catch (error) {
      console.log(error.message);
      
    }
  }
  return (
    <div>
     { data && data.map((val)=>{
      return (<div className="wholeParent" >
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
                  value={val.movieName }
                  onChange={getData} //
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
                      value={val.relesedYear }
                      onChange={getData} //
                    />
                  </div>
                  <div className="flexDiv">
                    <h4>Certificate</h4>
                    <input
                      type="text"
                      id="nameFiled"
                      name="censor"
                      value={val.censor}
                      onChange={getData} //
                    />
                  </div>
                  <div className="flexDiv">
                    <h4>Movie Thumbnail</h4>
                    <input
                      id="fileArea"
                      type="file"
                      name="thumbnail"
                      // value={val.thumpNile}
                      onChange={getData} // 
                    />
                    <img src={val.thumpNile} alt={val.movieName} />
                  </div>
                </div>
                <div className="centerDiv2">
                  <div className="flexDiv">
                    <h4>Movie Genre</h4>
                    <select id="nameFiled" name="genre" value={val.genre }>
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
                      value={val.rating}
                      onChange={getData} 
                    />
                  </div>
                  <div className="flexDiv">
                    <h4>Trailer or Teaser</h4>
                    <input
                      type="file"
                      id="fileArea"
                      name="movieVideo"
                      // value={val.movieVideo}
                      onChange={getData} // 
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
                    value={val.about }
                    onChange={getData} // 
                  ></textarea>
                </div>
                <div className="addDiv">
                  <button type="submit" onClick={updateMovie}>
                    Add Product <GrUpload />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)
     })}
    </div>
  );
};

export default Update;
