import React from "react";
import { Link } from "react-router-dom"; 

export default function WidgetYouTube() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link to="/user/:uid/website/:wid/page/:pid/widget" className="text-dark">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 ml-4 mb-0 text-secondary">
            Widget Edit
          </span>
        </div>
        <Link className="text-dark" to="/user/:uid/website/:wid/page/:pid/widget">
          <i className="fas fa-check" />
        </Link>
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
          <Link to="/user/:uid/website/:wid/page/:pid/widget" className="btn btn-danger btn-block">
            Delete
          </Link>
        </form>
      </main>
      {/* bottom navbar */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link className="text-dark" to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
