import { option, text } from "../interface/options.interface";

export class PrismLogger {
  constructor() {
    PrismLogger.log("Logger instance created");
  }

  static log(text: text, color: string = "white") {
    console.log(
      option.reset,
      option.bright,
      option.fg[color] + "\r",
      text,
      option.reset
    );
  }

  static error(text: text) {
    PrismLogger.log(text, "red");
  }

  static success(text: text) {
    PrismLogger.log(text, "green");
  }

  static warning(text: text) {
    PrismLogger.log(text, "yellow");
  }

  static red(text: text) {
    PrismLogger.log(text, "red");
  }

  static green(text: text) {
    PrismLogger.log(text, "green");
  }

  static yellow(text: text) {
    PrismLogger.log(text, "yellow");
  }

  static blue(text: text) {
    PrismLogger.log(text, "blue");
  }

  static magenta(text: text) {
    PrismLogger.log(text, "magenta");
  }

  static cyan(text: text) {
    PrismLogger.log(text, "cyan");
  }

  static white(text: text) {
    PrismLogger.log(text, "white");
  }

  static logBg(text: text, font: string = "black", bg: string = "white") {
    console.log(
      option.reset,
      option.bg[bg],
      option.bright,
      option.fg[font] + "\r",
      text,
      option.reset
    );
  }

  static errorBg(text: text) {
    PrismLogger.logBg(text, "white", "red");
  }

  static successBg(text: text) {
    PrismLogger.logBg(text, "white", "green");
  }

  static warningBg(text: text) {
    PrismLogger.logBg(text, "red", "yellow");
  }

  static redBg(text: text) {
    PrismLogger.logBg(text, "white", "red");
  }

  static greenBg(text: text) {
    PrismLogger.logBg(text, "white", "green");
  }

  static yellowBg(text: text) {
    PrismLogger.logBg(text, "red", "yellow");
  }

  static blueBg(text: text) {
    PrismLogger.logBg(text, "white", "blue");
  }

  static magentaBg(text: text) {
    PrismLogger.logBg(text, "white", "magenta");
  }

  static cyanBg(text: text) {
    PrismLogger.logBg(text, "white", "cyan");
  }

  static whiteBg(text: text) {
    PrismLogger.logBg(text, "black", "white");
  }
}
