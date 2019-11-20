import React from "react";

export default function WebsiteEdit() {
  return (
    <div>
      <nav className="navbar-dark bg-primary fixed-top row">
        {/* Left navbar */}
        <div className="col-lg-3 d-none d-lg-block">
          <div className="navbar">
            <div>
              <a className="text-light" href="WebsiteList.html">
                <i className="fas fa-chevron-left" />
              </a>
              <span className="navbar-brand h1 mb-0 ml-4">Websites</span>
            </div>
            <a className="text-light" href="WebsiteNew.html">
              <i className="fas fa-plus" />
            </a>
          </div>
        </div>
        {/* Right Navbar */}
        <div className="col-lg-9 navbar">
          <div>
            <a className="text-light d-lg-none" href="WebsiteList.html">
              <i className="fas fa-chevron-left" />
            </a>
            <span className="navbar-brand mb-0 h1 ml-4">Edit Website</span>
          </div>
          <a className="text-light" href="WebsiteList.html">
            <i className="fas fa-check" />
          </a>
        </div>
      </nav>
      {/* left body */}
      <div className="row">
        <div className="col-lg-3 d-none d-lg-block">
          <div className="container">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="../page/PageList.html">Blogging App</a>
                <a className="float-right" href="WebsiteEdit.html">
                  <i className="fas fa-cog" />
                </a>
              </li>
              <li className="list-group-item">
                <a href="../page/PageList.html">Address Book App</a>
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
              <li className="list-group-item">
                <a href="../page/PageList.html">Blogger App</a>
                <a className="float-right" href="WebsiteEdit.html">
                  <i className="fas fa-cog" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* right body */}
        <div className="col-lg-9">
          <div className="container-fluid">
            <form>
              <div className="form-group">
                <label htmlFor="name">Website Name</label>
                <input
                  type="text"
                  placeholder="Enter website name..."
                  id="name"
                  className="form-control"
                  defaultValue="Blogger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Website Description</label>
                <textarea
                  className="form-control"
                  placeholder="Enter website description..."
                  rows={5}
                  defaultValue={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore optio commodi minus esse amet libero nisi consectetur, blanditiis quas eaque vel debitis. Facilis aspernatur at laboriosam rerum! Est, dolore nemo?\n                    "
                  }
                />
              </div>
              <a className="btn btn-danger btn-block" href="WebsiteList.html">
                Delete
              </a>
            </form>
          </div>
        </div>
      </div>
      {/* bottom navbar */}
      <footer className="navbar navbar-dark bg-primary fixed-bottom">
        <span />
        <a className="text-light" href="../user/profile.html">
          <i className="fas fa-user" />
        </a>
      </footer>
    </div>
  );
}
