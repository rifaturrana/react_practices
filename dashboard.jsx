import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import axios from "axios";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postList, setPostList] = useState([]);

  const submit = () => {
    axios.post("http://localhost:3002/insert", {
      title: title,
      description: description,
    });

    setPostList((prevList) => [
      ...prevList,
      { title: title, description: description },
    ]);
  };

  useEffect(() => {
    axios.get("http://localhost:3002/get").then((response) => {
      setPostList(response.data);
    });
  }, []);

  let history = useHistory();
  const logout = () => {
    history.push("/");
  };

  return (
    <div className="App">
      <div className="text-right">
        <button type="button" className="btn btn-primary" onClick={logout}>
          Log Out
        </button>
      </div>

      <div className="form">
        <h4>Post Somethings</h4>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button onClick={submit}>Submit</button>
      </div>
      {postList.map((val) => {
        return (
          <div>
            <h6>Title: {val.title}</h6>
            <p>Description:{val.description}</p>
          </div>
        );
      })}
    </div>
  );
}
