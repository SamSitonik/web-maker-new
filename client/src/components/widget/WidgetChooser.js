// Done. 12-6-19
import React from "react";
import { Link, useParams, useHistory } from "react-router-dom"; 
import uuid from "uuid";
import axios from "axios"; 

export default function WidgetChooser(props) {
  const params = useParams();
  const history = useHistory();

  const create = async type => {
    // Create new widget variable
    const newWidget = {
      _id: uuid.v4(),
      widgetType: type,
      pageId: params.pid
    };
    // Add new widget into widgets array
    await axios.post("/api/widget", newWidget);
    // Navigate to widget edit page
    history.push(
      `/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget/${newWidget._id}`
    );
  };

  return (
    <div>
      {/* navbar */}
      <nav className="navbar bg-light navbar-light fixed-top">
        <div>
          <Link 
          to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`}
          className="text-dark">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Choose Widget</span>
        </div>
      </nav>
      {/* "You can use a div here, but the better idea is to use 'main'"-Shiyu */}
      <main className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <button onClick={create.bind(this, "HEADING")} className="btn">Header
            </button>
          </li>
          <li className="list-group-item">
            <a href="!#">Label</a>
          </li>
          <li className="list-group-item">
            <a href="!#">HTML</a>
          </li>
          <li className="list-group-item">
            <a href="!#">Text Input</a>
          </li>
          <li className="list-group-item">
            <a href ="!#">Link</a>
          </li>
          <li className="list-group-item">
            <a href="!#">Button</a>
          </li>
          <li className="list-group-item">
            <button className="btn" onClick={create.bind(this, "IMAGE")}>
              Image
            </button>
          </li>
          <li className="list-group-item">
            <button className="btn" onClick={create.bind(this, "YOUTUBE")}>
              YouTube
            </button>
          </li>
          <li className="list-group-item">
            <a href="!#">Data Table</a>
          </li>
          <li className="list-group-item">
            <a href="!#">Repeater</a>
          </li>
        </ul>
      </main>
      {/* footer */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        {/* "Even though the span is empty, we leave it here to move the user icon to the right side" */}
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
