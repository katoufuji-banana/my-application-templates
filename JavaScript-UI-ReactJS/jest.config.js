const path = require("path");

module.exports = {
  verbose: false,
  moduleNameMapper: {
    "src/(.*)": path.resolve("src/$1")
  }
};