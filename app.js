const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

const userRouter = require("./routes/user.route");
require("./config/db");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev")); // using "morgan(dev/short/combined/tiny) npm package we can see the details of get/post/others info from colsole"

app.use(userRouter);


// uploaded file will be shown in browser like(http://localhost:3030/uploads/1764049101064-Tasnuva_PP.jpg)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// home route
app.get("/", (req, res) => {
  res.send(
    `<h2>How to upload files(image/videos/txt/doc/etc), form data</h2> <br/> Go to : <a href="http://localhost:3030/register">User Information Upload here and check</a>`
  );
});

//route not-found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "error 404: route not found !!!",
  });
});

// server error

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Internal Server Error",
  });
});

module.exports = app;
