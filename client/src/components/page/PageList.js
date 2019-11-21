import React from "react";
import { Link } from "react-router-dom"; 

export default function PageList() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar bg-light navbar-light fixed-top">
        {/* first div contains the icon and word on the left */}
        <div>
          <Link to="/user/:uid/website" className="text-dark">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand mb-0 h1 ml-4 text-secondary">
            Pages
          </span>
        </div>
        {/* items on the right of the navbar*/}
        <Link to="/user/:uid/website/:wid/page/new" className="text-dark">
          <i className="fas fa-plus" />
        </Link>
      </nav>
      {/* "You can use a div here, but the better idea is to use 'main'"-Shiyu */}
      <main className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget">Blog Post</Link>
            <Link to="/user/:uid/website/:wid/page/:pid" className="float-right">
              <i className="fas fa-cog" />
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget">Blogs</Link>
            <Link to="/user/:uid/website/:wid/page/:pid" className="float-right">
              <i className="fas fa-cog" />
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget">Home</Link>
            <Link to="/user/:uid/website/:wid/page/:pid" className="float-right">
              <i className="fas fa-cog" />
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget">About</Link>
            <Link to="/user/:uid/website/:wid/page/:pid" className="float-right">
              <i className="fas fa-cog" />
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget">Contact Us</Link>
            <Link to="/user/:uid/website/:wid/page/:pid" className="float-right">
              <i className="fas fa-cog" />
            </Link>
          </li>
        </ul>
      </main>
      {/* footer */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link className="text-dark" to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
