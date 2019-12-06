// Done
import React from "react";
import { Link, useParams } from "react-router-dom"; 

export default function WidgetImage(props) {
  const params = useParams();

  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link 
          to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`}
          className="text-dark">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4 text-secondary">
            Widget Edit
          </span>
        </div>
        <button 
        className="text-dark btn" 
        form="widgetForm">
          <i className="fas fa-check" />
        </button>
      </nav>

      {/* body */}
      <main className="container">
        <form id="widgetForm" onSubmit={props.update}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              // id="name"
              className="form-control"
              placeholder="Enter Widget Name..."
              name="name"
              value={props.widget.name? props.widget.name : ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Widget Text..."
              // id="text"
              name="text"
              value={props.widget.text? props.widget.text : ""}
              onChange={props.onChange}
            />
          </div>
          {/* Question: Does the 'label for' and the 'id' have to be lowercase or uppercase, Answer: lowercase */}
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Image Address..."
              // id="url"
              name="url"
              value={props.widget.url? props.widget.url : ""}
              onChange={props.onChange}
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
              // id="width"
              name="width"
              value={props.widget.width? props.widget.width : "100"}
              onChange={props.onChange}
            />
          </div>
          {/* Right here, I didn't know where to find the 'Upload' button. The type I also didn't know, and it turned out to be file. We didn't need the placeholder here, redundant perhaps??? */}
          <div className="form-group">
            <label htmlFor="upload">Upload</label>
            <input type="file" className="form-control" id="upload" />
          </div>
          {/* before I had "a href then to "to but we put button on the last 3 pages for now, I think because the upload isn't going anywhere for now, (it's a dummy button) */}
          <button 
          type="button"
          className="btn btn-primary btn-block">Upload Image</button>
          <button 
          onClick={props.remove} 
          className="btn btn-danger btn-block">
            Delete
          </button>
        </form>
      </main>
      {/* bottom navbar */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link 
        className="text-dark" 
        to={`/user/${params.uid}`}>
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
