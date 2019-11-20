import React from "react";

export default function PageNew() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <a href="PageList.html" className="text-dark">
            <i className="fas fa-chevron-left" />
          </a>
          <span className="navbar-brand h1 ml-4 mb-0 text-secondary">
            New Page
          </span>
        </div>
        <a className="text-dark" href="Pagelist.html">
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
              className="form-control"
              placeholder="Enter page name..."
              id="name"
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
