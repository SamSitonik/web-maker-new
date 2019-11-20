import React from "react";

export default function WebsiteNew() {
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
            <a className="text-light" href="WebsiteList.html">
              <i className="fas fa-plus" />
            </a>
          </div>
        </div>
        {/* Right Navbar */}
        <div className="col-lg-9 navbar">
          <div>
            <a className="text-light d-lg-none " href="WebsiteList.html">
              <i className="fas fa-chevron-left" />
            </a>
            <span className="navbar-brand mb-0 h1 ml-4">New Website</span>
          </div>
          <a className="text-light" href="WebsiteList.html">
            <i className="fas fa-check" />
          </a>
        </div>
      </nav>
      {/* left body */}
      <main className="row">
        <aside className="col-lg-3 d-none d-lg-block">
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
        </aside>
        {/* right body */}
        <section className="col-lg-9">
          <div className="container-fluid">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter website name..."
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  placeholder="Enter website description..."
                  rows={5}
                  defaultValue={"                        "}
                />
              </div>
            </form>
          </div>
        </section>
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
