//Done. 
import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import uuid from "uuid";

export default function WebsiteNew(props) {
  const params = useParams();
  const history = useHistory();

  const [websites, setWebsites] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setWebsites(props.getWebsites(params.uid));
  }, [params.uid, props]);

  const submit = e => {
    e.preventDefault();
    const newWeb = {
      _id: uuid.v4(),
      name: name,
      description: description,
      developerId: params.uid
    };
    props.addWebsite(newWeb);
    history.push(`/user/${params.uid}/website`);
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary fixed-top row">
        {/* Left navbar */}
        <div className="col-lg-3 d-none d-lg-block">
          <div className="navbar">
            <div>
              <Link className="text-light" 
              to={`/user/${params.uid}/website`}>
                <i className="fas fa-chevron-left" />
              </Link>
              <span className="navbar-brand h1 mb-0 ml-4">Websites</span>
            </div>
            <Link className="text-light" 
            to={`/user/${params.uid}/website/new`}>
              <i className="fas fa-plus" />
            </Link>
          </div>
        </div>
        {/* Right Navbar */}
        <div className="col-lg-9 navbar">
          <div>
            <Link className="text-light d-lg-none " 
            to={`/user/${params.uid}/website`}>
              <i className="fas fa-chevron-left" />
            </Link>
            <span className="navbar-brand mb-0 h1 ml-4">New Website</span>
          </div>
          <button 
          className="text-light btn" 
          form="websiteForm">
            <i className="fas fa-check" />
          </button>
        </div>
      </nav>
      {/* left body */}
      <main className="row">
        <aside className="col-lg-3 d-none d-lg-block">
          <div className="container">
            <ul className="list-group list-group-flush">
              {websites.map(website => (
                <li key={website._id} className="list-group-item">
                  <Link
                  to={`/user/${website.developerId}/website/${website._id}/page`}>
                    {website.name}
                  </Link>
                  <Link className="float-right"
                  to={`/user/${website.developerId}/website/${website._id}`}>
                  <i className="fas fa-cog" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
{/*  OMIT because we have the NEW function             
                <Link to="/user/:uid/website/:wid/page">Blogging App</Link>
                             </li>
              <li className="list-group-item">
                <Link to="/user/:uid/website/:wid/page">Address Book App</Link>
                <Link className="float-right" to="/user/:uid/website/:wid">
                  <i className="fas fa-cog" />
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/user/:uid/website/:wid/page">Script Testing App</Link>
                <Link className="float-right" to="/user/:uid/website/:wid">
                  <i className="fas fa-cog" />
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/user/:uid/website/:wid/page">Blogger App</Link>
                <Link className="float-right" to="/user/:uid/website/:wid">
                  <i className="fas fa-cog" />
                </Link> */}
     
        {/* right body */}
        <section className="col-lg-9">
          <div className="container-fluid">
            <form onSubmit={submit} id="websiteForm">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter website name..."
                  // id="name"
                  className="form-control"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  placeholder="Enter website description..."
                  rows={5}
                  // defaultValue={" "}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
            </form>
          </div>
        </section>
      </main>
      {/* bottom navbar */}
      <footer className="navbar navbar-dark bg-primary fixed-bottom">
        <span />
        <Link className="text-light" 
        to={`/user/${params.uid}`}>
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
