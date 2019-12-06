// Done
import React from "react";
import { Link, useParams } from "react-router-dom"; 

export default function WidgetHeading(props) {
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
        className="text-dark" 
        form="widgetForm">
          <i className="fas fa-check" />
        </button>
        
      </nav>
      <main className="container">
        <form id="widgetForm" onSubmit={props.update}>
          {/* 'label for' and 'id' have to match */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Widget Name..."
              // id="name"
              name="name"
              value={props.widget.name ? props.widget.name : ""}
              onChange= {props.onChange}
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
              value={props.widget.text ? props.widget.text : ""}
              onChange= {props.onChange}
            />
          </div>
          {/* both type could be text or range, but range is a better practice. Letting the customer enter number only */}
          <div className="form-group">
            <label htmlFor="size">Size</label>
            <input
              type="range"
              min={1}
              max={6}
              className="form-control"
              // id="size"
              name="size"
              value={props.widget.size ? props.widget.size : "1"}
              onChange= {props.onChange}
            />
          </div>
          <button 
          type="button"
          onClick={props.remove}
          className="btn btn-danger btn-block">Delete</button>
        </form>
      </main>
      {/* Shortcut ex)a.text-dark, then, hit tab button... */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link 
        to={`/user/${params.uid}`} className="text-dark">
          <i className="fas fa-user"  />
        </Link>
      </footer>
    </div>
  );
}
