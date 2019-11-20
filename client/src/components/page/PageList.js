import React from "react";

export default function PageList() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar bg-light navbar-light fixed-top">
        {/* first div contains the icon and word on the left */}
        <div>
          <a href="../website/WebsiteList.html" className="text-dark">
            <i className="fas fa-chevron-left" />
          </a>
          <span className="navbar-brand mb-0 h1 ml-4 text-secondary">
            Pages
          </span>
        </div>
        {/* items on the right of the navbar*/}
        <a href="PageNew.html" className="text-dark">
          <i className="fas fa-plus" />
        </a>
      </nav>
      {/* "You can use a div here, but the better idea is to use 'main'"-Shiyu */}
      <main className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a href="../widget/WidgetList.html">Blog Post</a>
            <a href="PageEdit.html" className="float-right">
              <i className="fas fa-cog" />
            </a>
          </li>
          <li className="list-group-item">
            <a href="../widget/WidgetList.html">Blogs</a>
            <a href="PageEdit.html" className="float-right">
              <i className="fas fa-cog" />
            </a>
          </li>
          <li className="list-group-item">
            <a href="../widget/WidgetList.html">Home</a>
            <a href="PageEdit.html" className="float-right">
              <i className="fas fa-cog" />
            </a>
          </li>
          <li className="list-group-item">
            <a href="../widget/WidgetList.html">About</a>
            <a href="PageEdit.html" className="float-right">
              <i className="fas fa-cog" />
            </a>
          </li>
          <li className="list-group-item">
            <a href="../widget/WidgetList.html">Contact Us</a>
            <a href="PageEdit.html" className="float-right">
              <i className="fas fa-cog" />
            </a>
          </li>
        </ul>
      </main>
      {/* footer */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <a className="text-dark" href="../user/Profile.html">
          <i className="fas fa-user" />
        </a>
      </footer>
    </div>
  );
}
