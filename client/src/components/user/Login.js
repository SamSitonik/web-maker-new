// COMPLETE, GOOD
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Login(props) {  // <--We added (props) HERE, in the parameter so we can leave the function in the App.js page with the userdata
  //TEST-console.log(props.login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  async function onSubmit(e) {
    e.preventDefault();
    const res = await axios.get(
      `/api/user?username=${username}&password=${password}`
    );
    const user = res.data;

    if (user) {
      history.push(`/user/${user._id}`);
    } else {
      alert("Invalid Credential");
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            // OMIT-id="username"      <--Shiyu said I don't need to delete, but unnecessary 
            // aria-describedby="usernameHelp"
            placeholder="Username"
            value={username}
            onChange={e=>{      // <--added "value", "onChange", HERE to bind the variable and input, like UnitConverter project
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            // OMIT-id="password"
            placeholder="Password"
            value={password}
            onChange={e=>{
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary btn-block">Login</button>
        <Link className="btn btn-success btn-block" to="/register">
          Register
        </Link>
      </form>
    </div>
  );
}
// Line 54, changed this link, back to button, because we added the function
