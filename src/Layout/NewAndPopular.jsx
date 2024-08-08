import React, { useState } from 'react';
import Sidenav from '../Components/Sidenav/Sidenav';
import './Home.css';
import { GrUpload } from "react-icons/gr";

const NewandPopular = () => {
  const [formData, setFormData] = useState({
    movieName: '',
    releaseYear: '',
    certificate: '',
    thumbnail: null,
    genre: '',
    duration: '',
    trailer: null,
    plot: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.movieName) newErrors.movieName = 'Movie Name is required';
    if (formData.movieName.length > 30) newErrors.movieName = 'Movie Name should not exceed 30 characters';
    if (!formData.releaseYear) newErrors.releaseYear = 'Release Year is required';
    if (!formData.certificate) newErrors.certificate = 'Certificate is required';
    if (!formData.thumbnail) newErrors.thumbnail = 'Thumbnail is required';
    if (!formData.genre) newErrors.genre = 'Genre is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.trailer) newErrors.trailer = 'Trailer is required';
    if (!formData.plot) newErrors.plot = 'Plot is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted', formData);
    }
  };

  return (
    <div>
      <div className='wholeParent'>
        <div className='nav'>
          <Sidenav />
          <div className="contentParent">
            <div className="contentSpace">
              <div className="titel">
                <h2> Add products</h2>
              </div>
              <form className="inputFileds" onSubmit={handleSubmit}>
                <div className='inputDiv'>
                  <h4>Movie Name</h4>
                  <input
                    id='nameFiled'
                    type="text"
                    name="movieName"
                    placeholder='Name'
                    value={formData.movieName}
                    onChange={handleChange}
                  />
                  {errors.movieName && <p>{errors.movieName}</p>}
                </div>

                <div className="filedCenter">
                  <div className='centerDiv1'>
                    <div className='flexDiv'>
                      <h4>Movie Released Year</h4>
                      <input
                        type="number"
                        name="releaseYear"
                        id="nameFiled"
                        value={formData.releaseYear}
                        onChange={handleChange}
                      />
                      {errors.releaseYear && <p>{errors.releaseYear}</p>}
                    </div>
                    <div className='flexDiv'>
                      <h4>Certificate</h4>
                      <input
                        type="text"
                        name="certificate"
                        id='nameFiled'
                        value={formData.certificate}
                        onChange={handleChange}
                      />
                      {errors.certificate && <p>{errors.certificate}</p>}
                    </div>
                    <div className='flexDiv'>
                      <h4>Movie Thumbnail</h4>
                      <input
                        type="file"
                        name="thumbnail"
                        id="fileArea"
                        onChange={handleChange}
                      />
                      {errors.thumbnail && <p>{errors.thumbnail}</p>}
                    </div>
                  </div>
                  <div className='centerDiv2'>
                    <div className='flexDiv'>
                      <h4>Movie Genre</h4>
                      <select
                        name="genre"
                        id="nameFiled"
                        value={formData.genre}
                        onChange={handleChange}
                      >
                        <option value="">Select Genre</option>
                        <option value="Action">Action</option>
                        <option value="Romance">Romance</option>
                        <option value="Horror">Horror</option>
                        <option value="Comedy">Comedy</option>
                      </select>
                      {errors.genre && <p>{errors.genre}</p>}
                    </div>
                    <div className='flexDiv'>
                      <h4>Movie Duration</h4>
                      <input
                        type="text"
                        name="duration"
                        id='nameFiled'
                        value={formData.duration}
                        onChange={handleChange}
                      />
                      {errors.duration && <p>{errors.duration}</p>}
                    </div>
                    <div className='flexDiv'>
                      <h4>Trailer or Teaser</h4>
                      <input
                        type="file"
                        name="trailer"
                        id="fileArea"
                        onChange={handleChange}
                      />
                      {errors.trailer && <p>{errors.trailer}</p>}
                    </div>
                  </div>
                </div>
                <div className='filedEnd'>
                  <div className='filedEndDiv1'>
                    <h4>Movie Plot</h4>
                    <textarea
                      className='plotArea'
                      name="plot"
                      placeholder='Brief the movie story'
                      value={formData.plot}
                      onChange={handleChange}
                    ></textarea>
                    {errors.plot && <p>{errors.plot}</p>}
                  </div>
                  <div className='addDiv'>
                    <button type="submit">
                      Add Product <GrUpload />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewandPopular;