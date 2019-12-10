// done 12/5/19
const express = require("express");
const router = express.Router();

// TEST send hello to client-it works!
// router.get("/", (req, res) => {
//   res.json("Hello");
// });

const users = [
  { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com" },
  { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com" },
  { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com" },
  { _id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org" }
];

// Find user by credential
router.get("/", (req, res) => {
  // get username and password that the user typed in
  const username = req.query.username;
  const password = req.query.password;
  let user;
  // if username and password are sent from client
  if (username && password) {
    for (let i = 0; i < users.length; i++) {
      // if we found a user with given username and password
      if (users[i].username === username && users[i].password === password) {
      user = users[i];
    }
  }
  // if the username is taken
} else if (username) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      user = users[i];
    }
  }
}
// if the user is not existing
if (!user) {
    user = null;
  }
  // send user back to client
  res.json(user);
});

// Create new user
router.post("/", (req, res) => {
  const newUser = req.body; 
  users.push(newUser);
  res.json(newUser);
});

// Find user by ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  let user = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === id) {
      user = users[i];
    }
  }
  res.json(user);
});

// Update User
router.put("/", (req, res) => {
  const newUser = req.body;
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === newUser._id) {
      users[i] = newUser;
    }
  }
  res.json(newUser);
});

module.exports = router;

