import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter as Redirect, Link, useHistory } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setloginStatus] = useState("");
  let history = useHistory();

  const login = () => {
    axios
      .post("http://localhost:3002/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setloginStatus(response.data.message);
        } else {
          history.push("/dashboard");
          setloginStatus(response.data[0].username);
        }
      });
  };
  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="User Name..."
        />
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password..."
        />
        <button onClick={login}>Login</button>
        <p>
          Don't have any account?<Link to="/signup">Sign Up</Link>
        </p>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
};

export default Login;
