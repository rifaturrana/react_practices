import React, { useState } from "react";
import { Redirect } from "react-router";
import { auth } from "../services/firebase";
import firebase from "firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      auth.createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };

  const googleSignIn = () => {
    try {
      auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      alert(error);
    }
  };

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <h4>Sign Up</h4>
      <br />

      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <br />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <br />
        <button className="btn btn-danger mr-2" type="submit">
          Submit
        </button>
      </form>
      <p>You can also sign up with any of these services</p>
      <button
        className="btn btn-danger mr-2"
        type="button"
        onClick={googleSignIn}
      >
        Sign up with Google
      </button>
      <hr></hr>

      <p>
        Back to home? <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default SignUp;
