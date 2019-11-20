import React from "react";

export default function PageEdit() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <a href="PageList.html" className="text-dark">
            <i className="fas fa-chevron-left" />
          </a>
          <span className="navbar-brand h1 ml-4 mb-0 text-secondary">
            Edit Page
          </span>
        </div>
        <a className="text-dark" href="PageList.html">
          <i className="fas fa-check" />
        </a>
      </nav>
      {/* body */}
      <main className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter page name..."
              defaultValue="Blog Post"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter page title..."
              id="title"
            />
          </div>
          <a href="PageList.html" className="btn btn-danger btn-block">
            Delete
          </a>
        </form>
      </main>
      {/* bottom navbar */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <a href="../user/Profile.html" className="text-dark">
          <i className="fas fa-user" />
        </a>
      </footer>
    </div>
  );
}
