import React from "react";
import { Link } from "react-router-dom"; 

export default function WidgetChooser() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar bg-light navbar-light fixed-top">
        <div>
          <Link to="/user/:uid/website/:wid/page/:pid/widget" className="text-dark">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Choose Widget</span>
        </div>
      </nav>
      {/* "You can use a div here, but the better idea is to use 'main'"-Shiyu */}
      <main className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">Header</Link>
          </li>
          <li className="list-group-item">
            <Link to="!#">Label</Link>
          </li>
          <li className="list-group-item">
            <Link to="!#">HTML</Link>
          </li>
          <li className="list-group-item">
            <Link to="!#">Text Input</Link>
          </li>
          <li className="list-group-item">
            <Link to="!#">Link</Link>
          </li>
          <li className="list-group-item">
            <Link to="!#">Button</Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">Image</Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">YouTube</Link>
          </li>
          <li className="list-group-item">
            <Link to="!#">Data Table</Link>
          </li>
          <li className="list-group-item">
            <Link to="!#">Repeater</Link>
          </li>
        </ul>
      </main>
      {/* footer */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        {/* "Even though the span is empty, we leave it here to move the user icon to the right side" */}
        <span />
        <Link className="text-dark" to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
