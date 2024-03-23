// import Options from "./interfaces/options.interface";
// const option = require("./interfaces/options.interface.ts");

import { option } from "./interface/options.interface";

class PrismLogger {
  constructor() {
    this.log("Logger instance created");
  }

  log(text: string | number | object, color: string = "white") {
    console.log(
      option.reset,
      option.bright,
      option.fg[color] + "\r",
      text,
      option.reset
    );
  }

  error(text: string | number | object) {
    this.log(text, "red");
  }

  success(text: string | number | object) {
    this.log(text, "green");
  }

  warning(text: string | number | object) {
    this.log(text, "yellow");
  }

  red(text: string | number | object) {
    this.log(text, "red");
  }

  green(text: string | number | object) {
    this.log(text, "green");
  }

  yellow(text: string | number | object) {
    this.log(text, "yellow");
  }

  blue(text: string | number | object) {
    this.log(text, "blue");
  }

  magenta(text: string | number | object) {
    this.log(text, "magenta");
  }

  cyan(text: string | number | object) {
    this.log(text, "cyan");
  }

  white(text: string | number | object) {
    this.log(text, "white");
  }

  logBg(
    text: string | number | object,
    font: string = "black",
    bg: string = "white"
  ) {
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

const logger = new PrismLogger();
const runTests = () => {
  const temp = "This should be ";
  logger.log(temp + "RED text", "red");
};

runTests();
