import React from "react";

export default function WebsiteList() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <div>
          <a className="text-light" href="../user/Profile.html">
            <i className="fas fa-chevron-left" />
          </a>
          <span className="navbar-brand h1 mb-0 ml-4">Websites</span>
        </div>
        <a className="text-light" href="WebsiteNew.html">
          <i className="fas fa-plus" />
        </a>
      </nav>
      {/* body */}
      <main className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a href="../page/PageList.html">Address Book App</a>
            <a className="float-right" href="WebsiteEdit.html">
              <i className="fas fa-cog" />
            </a>
          </li>
          <li className="list-group-item">
            <a href="../page/PageList.html">Blogger</a>
            <a className="float-right" href="WebsiteEdit.html">
              <i className="fas fa-cog" />
            </a>
          </li>
          <li className="list-group-item">
            <a href="../page/PageList.html">Blogging App</a>
            <a className="float-right" href="WebsiteEdit.html">
              <i className="fas fa-cog" />
            </a>
          </li>
          <li className="list-group-item">
            <a href="../page/PageList.html">Script Testing App</a>
            <a className="float-right" href="WebsiteEdit.html">
              <i className="fas fa-cog" />
            </a>
          </li>
        </ul>
      </main>
      {/* bottom navbar */}
      <footer className="navbar navbar-dark bg-primary fixed-bottom">
        <span />
        <a className="text-light" href="../user/Profile.html">
          <i className="fas fa-user" />
        </a>
      </footer>
    </div>
  );
}
