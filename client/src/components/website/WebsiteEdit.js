// Done 12-5-19
import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function WebsiteEdit(props) {
  const params = useParams();
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    // Initialize left websites list
    getWebsites();
    // Initialize right website form
    getWebsite();
    // eslint-disable-next-line
  }, [params.wid]);

  const getWebsites = async () => {
    const res = await axios.get(`/api/website/user/${params.uid}`);
    setWebsites(res.data);
  };

  const getWebsite = async () => {
    const res = await axios.get(`/api/website/${params.wid}`);
    setName(res.data.name);
    setDescription(res.data.description);
  };

  const remove = async () => {
    await axios.delete(`/api/website/${params.wid}`);
    history.push(`/user/${params.uid}/website`);
  };

  const update = async e => {
    e.preventDefault();
    const newWeb = {
      _id: params.wid,
      name: name, 
      description: description,
      developerId: params.uid
    };
    await axios.put("/api/website", newWeb);
    history.push(`/user/${params.uid}/website`);
  };
  
  return (
    <div>
      <nav className="navbar-dark bg-primary fixed-top row">
        {/* Left navbar */}
        <div className="col-lg-3 d-none d-lg-block">
          <div className="navbar">
            <div>
              <Link 
              className="text-light" 
              to={`/user/${params.uid}/website`}>
                <i className="fas fa-chevron-left" />
              </Link>
              <span className="navbar-brand h1 mb-0 ml-4">Websites</span>
            </div>
            <Link 
            className="text-light" 
            to={`/user/${params.uid}/website/new`}>
              <i className="fas fa-plus" />
            </Link>
          </div>
        </div>
        {/* Right Navbar */}
        <div className="col-lg-9 navbar">
          <div>
            <Link className="text-light d-lg-none" 
            to={`/user/${params.uid}/website`}>
              <i className="fas fa-chevron-left" />
            </Link>
            <span className="navbar-brand mb-0 h1 ml-4">Edit Website</span>
          </div>
          <button 
          className="text-light btn" 
          form="websiteForm">
            <i className="fas fa-check" />
          </button>
        </div>
      </nav>
      {/* left body */}
      <div className="row">
        <div className="col-lg-3 d-none d-lg-block">
          <div className="container">
            <ul className="list-group list-group-flush">
              {websites.map(website => (
                <li key= {website._id} className="list-group-item">
                <Link 
                to={`/user/${website.developerId}/website/${website._id}/page`}
                >{website.name}
                </Link>
                <Link 
                className="float-right" 
                to={`/user/${website.developerId}/website/${website._id}`}>
                  <i className="fas fa-cog" />
                </Link>
              </li> 
              ))}
            </ul>
          </div>
        </div>
        {/* right body */}
        <div className="col-lg-9">
          <div className="container-fluid">
            <form id= "websiteForm" onSubmit={update}>
              <div className="form-group">
                <label htmlFor="name">Website Name</label>
                <input
                  type="text"
                  placeholder="Enter website name..."
                  // id="name"
                  className="form-control"
                  // defaultValue="Blogger"
                  value={name}
                  onChange= {e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Website Description</label>
                <textarea
                  className="form-control"
                  placeholder="Enter website description..."
                  rows={5}
                  value={description}
                  onChange= {e => setDescription(e.target.value)}
                  />
            {/* defaultValue={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore optio commodi minus esse amet libero nisi consectetur, blanditiis quas eaque vel debitis. Facilis aspernatur at laboriosam rerum! Est, dolore nemo?\n                    "
                  }/> */}
              </div>
              <button type="button" onClick={remove} className="btn btn-danger btn-block">
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* bottom navbar */}
      <footer className="navbar navbar-dark bg-primary fixed-bottom">
        <span />
        <Link 
        className="text-light" 
        to={`/user/${params.uid}`}>
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
