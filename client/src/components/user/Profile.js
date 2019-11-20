import React from "react";

export default function Profile() {
  return (
    <div>
      {/* navbar */}
      <nav classname="navbar navbar-dark bg-primary fixed-top">
        <span classname="navbar-brand h1 mb-0 ml-4">Profile</span>
        <a classname="text-light" href="../user/Profile.html">
          <i classname="fas fa-check" />
        </a>
      </nav>
      <main classname="container">
        <form>
          <div classname="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              classname="form-control"
              id="username"
              placeholder="Enter username here..."
            />
          </div>
          <div classname="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              classname="form-control"
              id="email"
              placeholder="Enter your email here..."
            />
          </div>
          <div classname="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              classname="form-control"
              id="firstName"
              placeholder="Enter your first name..."
            />
          </div>
          <div classname="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              classname="form-control"
              id="lastName"
              placeholder="Enter your last name..."
            />
          </div>
        </form>
        <a
          href="../website/WebsiteList.html"
          classname="btn btn-primary btn-block"
        >
          Websites
        </a>
        <a classname="btn btn-danger btn-block" href="Login.html">
          Logout
        </a>
      </main>
      {/* bottom navbar */}
      <footer classname="navbar navbar-dark bg-primary fixed-bottom">
        <span />
        <a classname="text-light" href="Profile.html">
          <i classname="fas fa-user" />
        </a>
      </footer>
    </div>
  );
}
