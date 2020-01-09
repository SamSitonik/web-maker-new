// "Middleware" Contains all the functions between req & res
const jwt = require("jsonwebtoken");
const config = require("config");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  // But, if there is a token, then try/catch 
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: "Authentication failed, wrong token" });
  }
}

module.exports = auth;