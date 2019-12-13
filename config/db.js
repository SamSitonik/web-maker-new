// 12-11-19- (file exported to server.js. We just want to separate code into different files to make it more readable. 
const mongoose = require("mongoose");
const config = require("config");
 
const db = config.get("mongo");
 
async function connectDB() {
  await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = connectDB;