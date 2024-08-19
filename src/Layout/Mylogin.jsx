import React, { useState } from "react";
import "./Mylogin.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Mylogin = () => {
  const navigate = useNavigate();
  let [input, setinput] = useState({ email: "", password: "" });

  function handlechange(e) {
    let myName = e.target.name;
    let myValue = e.target.value;

    setinput({ ...input, [myName]: myValue });
  }

  const loginProcess = async (e) => {
    console.log("data fetching....");
    e.preventDefault()   
    try {
      let data = {
        email: input.email,
        password: input.password,
      };
      console.log(data);

       await axios.post("http://localhost:4000/admin/login", data)
     
      .then((res)=>{
          console.log(res);
          return navigate('/home')
      })
      .catch((err)=>console.log(err.message))
      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="wrapper">
      <form>
        <h1>LOGIN</h1>
        <div className="input-box">
          <input
            type="text"
            name="email"
            placeholder="username"
            required
            onChange={handlechange}
          />
          <p></p>
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input
            name="password"
            type="Password"
            placeholder="password"
            required
            onChange={handlechange}
          />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forget password?</a>
        </div>

        <button onClick={loginProcess}>Login</button>

        <div className="register-link">
          <p>
            Dont have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Mylogin;
