import React from "react";

export default function Login() {
  return (
    <div classname="container">
      <h1>Login</h1>
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
        <a classname="btn btn-primary btn-block" href="Profile.html">
          Login
        </a>
        <a classname="btn btn-success btn-block" href="Register.html">
          Register
        </a>
      </form>
    </div>
  );
}
