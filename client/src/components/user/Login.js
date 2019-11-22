// COMPLETE, GOOD
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
export default function Login(props) {  // <--We added (props) HERE, in the parameter so we can leave the function in the App.js page with the userdata
  //TEST-console.log(props.login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    
    // console.log(props.users);
  for(let user of props.users) {
    // We found the user
    if(user.username === username && user.password === password) {
      //  /user/:uid
      history.push(`/user/${user._id}`);
      return;
      // changed from break to return, because we want it to STOP if valid
    }
  }
  // we can't find user
  alert("Invalid Credential, please try again")
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
            onChange={e=>{setUsername(e.target.value);}}
            // <--added "value", "onChange", HERE to bind the variable and input, like UnitConverter project
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            // OMIT-id="password"
            placeholder="Password"
            value={password}
            onChange={e=>{setPassword(e.target.value);}}
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
