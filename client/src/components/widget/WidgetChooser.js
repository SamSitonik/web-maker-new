import React from "react";

export default function WidgetChooser() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar bg-light navbar-light fixed-top">
        <div>
          <a href="WidgetList.html" className="text-dark">
            <i className="fas fa-chevron-left" />
          </a>
          <span className="navbar-brand h1 mb-0 ml-4">Choose Widget</span>
        </div>
      </nav>
      {/* "You can use a div here, but the better idea is to use 'main'"-Shiyu */}
      <main className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a href="WidgetHeading.html">Header</a>
          </li>
          <li className="list-group-item">
            <a href="#">Label</a>
          </li>
          <li className="list-group-item">
            <a href="#">HTML</a>
          </li>
          <li className="list-group-item">
            <a href="#">Text Input</a>
          </li>
          <li className="list-group-item">
            <a href="#">Link</a>
          </li>
          <li className="list-group-item">
            <a href="#">Button</a>
          </li>
          <li className="list-group-item">
            <a href="WidgetImage.html">Image</a>
          </li>
          <li className="list-group-item">
            <a href="WidgetYouTube.html">YouTube</a>
          </li>
          <li className="list-group-item">
            <a href="#">Data Table</a>
          </li>
          <li className="list-group-item">
            <a href="#">Repeater</a>
          </li>
        </ul>
      </main>
      {/* footer */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        {/* "Even though the span is empty, we leave it here to move the user icon to the right side" */}
        <span />
        <a className="text-dark" href="../user/Profile.html">
          <i className="fas fa-user" />
        </a>
      </footer>
    </div>
  );
}
