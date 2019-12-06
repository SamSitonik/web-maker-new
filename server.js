// Good 12/6/19
// Import express library
const express = require("express");
// Import path module
const path = require("path");
// Init express
const app = express();
 
// Initialize it
app.use(express.json()); 

// Define Routes (Using code from A4, copy/paste)
app.use("/api/user", require("./routes/user"));
app.use("/api/website", require("./routes/website"));
app.use("/api/page", require("./routes/page"));
app.use("/api/widget", require("./routes/widget"));
 
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder(Don't Worry about this "if" online)
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
 
const PORT = process.env.PORT || 3100;
 
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// app.listen(3100, () => {
//   console.log("Server started on port 3100");
// });
