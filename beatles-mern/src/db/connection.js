const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose
  .connect("mongodb://localhost/user")
  .then((connection) => console.log("Connection established!"))
  .catch((err) => console.log("Connection failed!", err));

module.exports = mongoose;
