import React from "react";

export default function Login() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <a href="WidgetList.html" className="text-dark">
            <i className="fas fa-chevron-left" />
          </a>
          <span className="navbar-brand h1 ml-4 mb-0 text-secondary">
            Widget Edit
          </span>
        </div>
        <a className="text-dark" href="WidgetList.html">
          <i className="fas fa-check" />
        </a>
      </nav>
      <main className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter Widget Name..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Widget Text..."
              id="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter YouTube Address..."
              id="url"
            />
          </div>
          <div className="form-group">
            <label htmlFor="width">Width</label>
            <input
              type="range"
              min={1}
              max={100}
              className="form-control"
              id="width"
            />
          </div>
          <a href="WidgetList.html" className="btn btn-danger btn-block">
            Delete
          </a>
        </form>
      </main>
      {/* bottom navbar */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <a className="text-dark" href="../User/Profile.html">
          <i className="fas fa-user" />
        </a>
      </footer>
    </div>
  );
}
