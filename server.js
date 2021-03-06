// Good 12/16/19
const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./config/db");

// Connect DB (file from db.js could all be here, but we just want to separate code into different files to make it more readable. So we can just call the function right here.)
connectDB();
 
app.use(express.json()); 

// Define Routes 
app.use("/api/user", require("./routes/user"));
app.use("/api/website", require("./routes/website"));
app.use("/api/page", require("./routes/page"));
app.use("/api/widget", require("./routes/widget"));
 
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
 
const PORT = process.env.PORT || 3100;
 
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

