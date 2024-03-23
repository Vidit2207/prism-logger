// import Options from "./interfaces/options.interface";
// const option = require("./interfaces/options.interface.ts");

import { option } from "./interface/options.interface";

export class PrismLogger {
  constructor() {
    this.log("Logger instance created");
  }

  log(text, color = "white") {
    console.log(
      option.reset,
      option.bright,
      option.fg[color] + "\r",
      text,
      option.reset
    );
  }

  error(text) {
    this.log(text, "red");
  }

  success(text) {
    this.log(text, "green");
  }

  warning(text) {
    this.log(text, "yellow");
  }

  red(text) {
    this.log(text, "red");
  }

  green(text) {
    this.log(text, "green");
  }

  yellow(text) {
    this.log(text, "yellow");
  }

  blue(text) {
    this.log(text, "blue");
  }

  magenta(text) {
    this.log(text, "magenta");
  }

  cyan(text) {
    this.log(text, "cyan");
  }

  white(text) {
    this.log(text, "white");
  }

  logBg(text, font = "black", bg = "white") {
    console.log(
      option.reset,
      option.bg[bg],
      option.bright,
      option.fg[font] + "\r",
      text,
      option.reset
    );
  }
}

// module.exports = PrismLogger;

// const logger = new PrismLogger();
// const runTests = () => {
//   const temp = "This should be ";
//   logger.log(temp + "RED text", "red");
// };

// runTests();
