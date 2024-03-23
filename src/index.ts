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

  static error(text: string | number | object) {
    PrismLogger.log(text, "red");
  }

  static success(text: string | number | object) {
    PrismLogger.log(text, "green");
  }

  static warning(text: string | number | object) {
    PrismLogger.log(text, "yellow");
  }

  static red(text: string | number | object) {
    PrismLogger.log(text, "red");
  }

  static green(text: string | number | object) {
    PrismLogger.log(text, "green");
  }

  static yellow(text: string | number | object) {
    PrismLogger.log(text, "yellow");
  }

  static blue(text: string | number | object) {
    PrismLogger.log(text, "blue");
  }

  static magenta(text: string | number | object) {
    PrismLogger.log(text, "magenta");
  }

  static cyan(text: string | number | object) {
    PrismLogger.log(text, "cyan");
  }

  static white(text: string | number | object) {
    PrismLogger.log(text, "white");
  }

  static logBg(
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
