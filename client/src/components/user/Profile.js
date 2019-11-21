import React from "react";
import { Link } from "react-router-dom"; 

export default function Profile() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <span className="navbar-brand h1 mb-0 ml-4">Profile</span>
        <Link className="text-light" to="/user/:uid">
          <i className="fas fa-check" />
        </Link>
      </nav>
      <main className="container">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username here..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email here..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name..."
            />
          </div>
        </form>
        <Link className="btn btn-primary btn-block" to="/user/:uid/website">
        Websites
        </Link>
        <Link className="btn btn-danger btn-block" to="/login">
        Logout
        </Link>
      </main>
      {/* bottom navbar */}
      <footer className="navbar navbar-dark bg-primary fixed-bottom">
        <span />
        <Link className="text-light" to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
