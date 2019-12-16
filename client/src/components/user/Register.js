// DONE 12-16-19
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const history = useHistory();

  const register = async e => {
    e.preventDefault(); 
    // Check if passwords match 
    if(password !== password2) {
      alert("The passwords you entered do not match, please try again");
      return;
    }
    // Check if username is already taken
    const res = await axios.get(
      `/api/user?username=${username}`);
    if(res.data) {
      alert("Username is taken, please try another one");
      return;
    }

   // Add new user into users, (If passed both)
    const newUser = {
      username: username,
      password: password,
      firstName: "",
      lastName: "",
      email: ""
    };
    await axios.post("/api/user", newUser);
    console.log(newUser);
    // Navigate user into his profile
    history.push(`/user/${newUser._id}`);
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={register}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            // id="username"
            // aria-describedby="usernameHelp"
            placeholder="Username"
            value={username}
            onChange={e=> setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            // id="password"
            placeholder="Password"
            value={password}
            onChange={e=> setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            // id="verify password"
            placeholder="Verify Password"
            value={password2}
            onChange={e=> setPassword2(e.target.value)}
          />
        </div>
        <button className="btn btn-primary btn-block">
          Register
        </button>
        <Link className="btn btn-danger btn-block" 
        to="/login">
          Cancel
        </Link>
      </form>
    </div>
  );
}
