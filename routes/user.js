// Good 12/16/19
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const auth = require("../middleware/auth");

// Login
router.post("/login", async(req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username: username, password: password });

  if(!user) {
    res.json(null);
  } else {
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: "1d"
      },
      (error, token) => {
        if (error) {
          throw error;
        }
        res.json({ token, user });
      }
    );
  }
});

// Load User
router.get("/load", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
});

// // Find user by credential
// router.get("/", async (req, res) => {
//   // get username and password that the user typed in
//   const username = req.query.username;
//   const password = req.query.password;
//   let user;
//   // if username and password are sent from client
//   if (username && password) {
//     user = await User.findOne({ username: username, password: password});
//   // if the username is taken
// } else if (username) {
//   user = await User.findOne({ username: username });
// }

// // if the user is not existing
// if (!user) {
//     user = null;
//   }

  // send user back to client
//   res.json(user);
// });

// Create new user
router.post("/", async (req, res) => {
  const newUser = new User({ ...req.body });
  const user = await newUser.save();
  console.log(user);
  res.json(user);
});

// Find user by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  console.log(user);
  res.json(user);
});

// Update User
router.put("/", async (req, res) => {
  const newUser = req.body;
  await User.findByIdAndUpdate(newUser._id, newUser);
  res.json(newUser);
});

module.exports = router;


