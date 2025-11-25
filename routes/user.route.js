const router = require("express").Router();
const path = require("path");
const multer = require("multer");

const User = require("../models/user.model");

const { getRegisterUser } = require("../controllers/user.controller");

router.get("/blog", (req, res) => {
  res.send("<h2>Blog page</h2>");
});

router.get("/register", getRegisterUser);

// file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

router.post("/register", upload.single("image"), async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      image: req.file?.filename,
    });

    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
