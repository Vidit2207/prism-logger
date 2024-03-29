import { text } from "../interface/options.interface";

export class ConsoleLogger {
  debug: boolean = false;
  constructor(debug: boolean = false) {
    this.debug = debug;
    if (this.debug) {
      this.log("Logging enabled");
    } else {
      this.log("Logging disabled");
    }
    this.log("Logger instance created");
  }

  log(text: text, color: string = "black") {
    if (this.debug) {
      console.log(`%c ${text}`, `color: ${color};`);
    }
  }

  error(text: text) {
    this.log(text, "red");
  }

  success(text: text) {
    this.log(text, "green");
  }

  warning(text: text) {
    this.log(text, "yellow");
  }

  red(text: text) {
    this.log(text, "red");
  }

  green(text: text) {
    this.log(text, "green");
  }

  yellow(text: text) {
    this.log(text, "yellow");
  }

  blue(text: text) {
    this.log(text, "blue");
  }

  magenta(text: text) {
    this.log(text, "magenta");
  }

  cyan(text: text) {
    this.log(text, "cyan");
  }

  white(text: text) {
    this.log(text, "white");
  }

  logBg(text: text, font: string = "white", bg: string = "black") {
    if (this.debug) {
      console.log(`%c ${text}`, `color: ${font}; background-color: ${bg}`);
    }
  }

  errorBg(text: text) {
    this.logBg(text, "white", "red");
  }

  successBg(text: text) {
    this.logBg(text, "white", "green");
  }

  warningBg(text: text) {
    this.logBg(text, "red", "yellow");
  }

  redBg(text: text) {
    this.logBg(text, "white", "red");
  }

  greenBg(text: text) {
    this.logBg(text, "white", "green");
  }

  yellowBg(text: text) {
    this.logBg(text, "red", "yellow");
  }

  blueBg(text: text) {
    this.logBg(text, "white", "blue");
  }

  magentaBg(text: text) {
    this.logBg(text, "white", "magenta");
  }

  cyanBg(text: text) {
    this.logBg(text, "white", "cyan");
  }

  whiteBg(text: text) {
    this.logBg(text, "black", "white");
  }
}
