import React from "react";

export default function Register() {
  return (
    <div classname="container">
      <h1>Register</h1>
      <form>
        <div classname="form-group">
          <input
            type="text"
            classname="form-control"
            id="username"
            aria-describedby="usernameHelp"
            placeholder="Username"
          />
        </div>
        <div classname="form-group">
          <input
            type="password"
            classname="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div classname="form-group">
          <input
            type="password"
            classname="form-control"
            id="verify password"
            placeholder="Verify Password"
          />
        </div>
        <a classname="btn btn-primary btn-block" href="Profile.html">
          Register
        </a>
        <a classname="btn btn-danger btn-block" href="Login.html">
          Cancel
        </a>
      </form>
    </div>
  );
}
