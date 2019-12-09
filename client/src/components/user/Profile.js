// DONE 12/5/09
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Profile(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const params = useParams();

  const getUser = async () => {
    const res = await axios.get(`/api/user/${params.uid}`);
    const user = res.data;
    setUsername(user.username);
    setEmail(user.email);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setPassword(user.password);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const update = async () => {
    const newUser = {
      _id: params.uid,
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName
    };
        
    // Update user in users
    await axios.put("/api/user", newUser);

    alert("User info is updated!");
  };

  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <span className="navbar-brand h1 mb-0 ml-4">Profile</span>
        <span className="click" onClick={update}>
          <i className="fas fa-check" text-light></i>
        </span>
      </nav>
      <main className="container">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              // id="username"
              placeholder="Enter username here..."
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              // id="email"
              placeholder="Enter your email here..."
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              // id="firstName"
              placeholder="Enter your first name..."
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              // id="lastName"
              placeholder="Enter your last name..."
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </form>
        <Link
          to={`/user/${params.uid}/website`}
          className="btn btn-primary btn-block"
        >
          Websites
        </Link>
        <Link className="btn btn-danger btn-block" to="/login">
          Logout
        </Link>
      </main>
      {/* bottom navbar */}
      <footer className="navbar navbar-dark bg-primary fixed-bottom">
        <span />
        <Link className="text-light" to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
