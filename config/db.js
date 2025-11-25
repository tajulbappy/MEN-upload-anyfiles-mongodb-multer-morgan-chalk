const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("./config");

const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log(chalk.green.bgGray("mongodb atlas is connected"));
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
