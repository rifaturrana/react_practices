import React, { useState } from "react";
import { BrowserRouter as Redirect, Link } from "react-router-dom";
import axios from "axios";

export default function SingUP() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    axios
      .post("http://localhost:3002/register", {
        username: usernameReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>User Name</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}>Registration</button>
        <p>
          Already have account?<Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
