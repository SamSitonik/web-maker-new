import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container">
      <h1>Register</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernameHelp"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="verify password"
            placeholder="Verify Password"
          />
        </div>
        <Link className="btn btn-primary btn-block" to="/user/:uid">
        Register
        </Link>
        <Link className="btn btn-danger btn-block" to="/login">
        Cancel
        </Link>
      </form>
    </div>
  );
}
