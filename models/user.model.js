const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name is required"],
  },

  image: {
    type: String,
    required: [true, "user image is required"],
  },
});


module.exports = mongoose.model("Users", userSchema)