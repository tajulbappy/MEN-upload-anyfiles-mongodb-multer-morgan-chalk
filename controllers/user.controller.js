const path = require("path");

const getRegisterUser = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};


module.exports = {getRegisterUser}
