// done.
import React from "react";
import { Link, useParams } from "react-router-dom"; 

export default function WidgetYouTube(props) {
  const params = useParams();

  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link 
          to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`}
          className="text-dark">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 ml-4 mb-0 text-secondary">
            Widget Edit
          </span>
        </div>
        <button
        className="text-dark btn" 
        form="widgetForm">
          <i className="fas fa-check" />
        </button>
      </nav>

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
              value={props.widget.name?props.widget.name: ""}
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
              value={props.widget.text?props.widget.text: ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter YouTube Address..."
              // id="url"
              name="url"
              value={props.widget.url?props.widget.url: ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="width">Width</label>
            <input
              type="range"
              min={1}
              max={100}
              className="form-control"
              // id="width"
              name="width"
              value={props.widget.width?props.widget.width: "100%"}
              onChange={props.onChange}
            />
          </div>
          <button 
          onClick={props.remove} 
          type="button"
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
