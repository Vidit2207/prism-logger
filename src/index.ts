import { option } from "./interface/options.interface";

export class PrismLogger {
  constructor() {
    PrismLogger.log("Logger instance created");
  }

  static log(text: string | number | object, color: string = "white") {
    console.log(
      option.reset,
      option.bright,
      option.fg[color] + "\r",
      text,
      option.reset
    );
  }

  error(text: string | number | object) {
    PrismLogger.log(text, "red");
  }

  success(text: string | number | object) {
    PrismLogger.log(text, "green");
  }

  warning(text: string | number | object) {
    PrismLogger.log(text, "yellow");
  }

  red(text: string | number | object) {
    PrismLogger.log(text, "red");
  }

  green(text: string | number | object) {
    PrismLogger.log(text, "green");
  }

  yellow(text: string | number | object) {
    PrismLogger.log(text, "yellow");
  }

  blue(text: string | number | object) {
    PrismLogger.log(text, "blue");
  }

  magenta(text: string | number | object) {
    PrismLogger.log(text, "magenta");
  }

  cyan(text: string | number | object) {
    PrismLogger.log(text, "cyan");
  }

  white(text: string | number | object) {
    PrismLogger.log(text, "white");
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
