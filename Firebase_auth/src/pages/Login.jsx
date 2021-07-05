import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../components/auth";
import { auth } from "../services/firebase";
import firebase from "firebase";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      auth.signInWithEmailAndPassword(email.value, password.value);
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
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label for="email">Email: </label>
        <input type="email" name="email" placeholder="Email" />
        <br />
        <label for="password">Password: </label>
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
        Don't have an account? <Link to="/signup">Sign Up.</Link>
      </p>
    </div>
  );
};

export default LogIn;
