import React from "react";

export default function Login() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <a href="WidgetList.html" className="text-dark">
            <i className="fas fa-chevron-left" />
          </a>
          <span className="navbar-brand h1 mb-0 ml-4 text-secondary">
            Widget Edit
          </span>
        </div>
        <a className="text-dark" href="WidgetList.html">
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
          {/* Question: Does the 'label for' and the 'id' have to be lowercase or uppercase, Answer: lowercase */}
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Image Address..."
              id="url"
            />
          </div>
          {/* I didn't know what 'type' and it turns out that we decided to use range. With range there must be a min/max */}
          <div className="form-group">
            <label htmlFor="width">Width</label>
            <input
              type="range"
              min={1}
              max={100}
              className="form-control"
              placeholder="100%"
              id="width"
            />
          </div>
          {/* Right here, I didn't know where to find the 'Upload' button. The type I also didn't know, and it turned out to be file. We didn't need the placeholder here, redundant perhaps??? */}
          <div className="form-group">
            <label htmlFor="upload">Upload</label>
            <input type="file" className="form-control" id="upload" />
          </div>
          {/* before I had "a href" but we put button on the last 3 pages for now, I think because the upload isn't going anywhere for now, (it's a dummy button) */}
          <button className="btn btn-primary btn-block">Upload Image</button>
          <a href="WidgetList.html" className="btn btn-danger btn-block">
            Delete
          </a>
        </form>
      </main>
      {/* bottom navbar */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <a className="text-dark" href="../user/Profile.html">
          <i className="fas fa-user" />
        </a>
      </footer>
    </div>
  );
}
