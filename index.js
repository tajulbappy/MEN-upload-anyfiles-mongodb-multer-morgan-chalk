const chalk = require("chalk");
const app = require("./app");
const config = require("./config/config");

const PORT = config.app.port || 3333;

app.listen(PORT, () => {
  console.log(
    chalk.blue.bold.bgYellow(`Server is running at http://localhost:${PORT}`)
  );
});

// using "chalk npm version-4" we can use the color/bgColor/etc for styling of console.log(example above)
