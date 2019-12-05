// Done 12-6-19
import React, { useState, useEffect} from "react";
import { Link, useHistory, useParams } from "react-router-dom"; 
import axios from "axios";

export default function PageEdit(props) {
  const history = useHistory();
  const params = useParams();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getPage();
    // eslint-disable-next-line
  }, []);

  const getPage = async () => {
    const res = await axios.get(`/api/page/${params.pid}`);
    const page = res.data;
    setName(page.name);
    setTitle(page.title);
  };

  const remove = async () => {
    await axios.delete(`/api/page/${params.pid}`);
    history.push(`/user/${params.uid}/website/${params.wid}/page`);
  };

  const update = async e => {
    e.preventDefault();
    const newPage = {
      _id: params.pid,
      name:name, 
      title: title, 
      websiteId: params.wid
    };
    await axios.put("/api/page", newPage);
    history.push(`/user/${params.uid}/website/${params.wid}/page`);
  };

  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link 
          to={`/user/${params.uid}/website/${params.wid}/page`}
          className="text-dark">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 ml-4 mb-0 text-secondary">
            Edit Page
          </span>
        </div>
        <button className="text-dark btn" form="pageForm">
          <i className="fas fa-check" />
        </button>
      </nav>
      {/* body */}
      <main className="container">
        <form id="pageForm" onSubmit={update}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              // id="name"
              className="form-control"
              placeholder="Enter page name..."
              // defaultValue="Blog Post"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter page title..."
              // id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <button 
            type="button"
            className="btn btn-danger btn-block">
            onClick={remove}>
              Delete
          </button>
        </form>
      </main>
      {/* bottom navbar */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link 
        to={`/user/${params.uid}`} 
        className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}


