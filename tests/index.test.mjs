import { PrismLogger } from "../dist/index.js";
import chai from "chai";
const { expect } = chai;
import sinon from "sinon";
import { option } from "../dist/interface/options.interface.js";

// const checkC

describe("***** Text Color Tests *****", function () {
  const text = "Hello, Alice!";

  it(`should log an error to the console in red color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    const error = new Error("This is an error");
    PrismLogger.error(error.message);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bright,
        option.fg["red"] + "\r",
        error.message,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log a success "${text}" to the console in green color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.success(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bright,
        option.fg["green"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log a warning to the console in yellow color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.warning(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bright,
        option.fg["yellow"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log "${text}" to the console in red color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.red(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bright,
        option.fg["red"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log "${text}" to the console in green color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.green(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bright,
        option.fg["green"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log "${text}" to the console in yellow color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.yellow(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bright,
        option.fg["yellow"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log "${text}" to the console in blue color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.blue(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bright,
        option.fg["blue"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });
  it(`should log "${text}" to the console in magenta color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.magenta(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bright,
        option.fg["magenta"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });
  it(`should log "${text}" to the console in cyan color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.cyan(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bright,
        option.fg["cyan"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });
  it(`should log "${text}" to the console in white color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.white(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bright,
        option.fg["white"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });
});

describe("***** Bg Color Tests *****", function () {
  const text = "Hello, Alice!";

  it(`should log an error to the console in red bg color and white text color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    const error = new Error("This is an error");
    PrismLogger.errorBg(error.message);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bg["red"],
        option.bright,
        option.fg["white"] + "\r",
        error.message,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log a success "${text}" to the console in green bg color and white text color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.successBg(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bg["green"],
        option.bright,
        option.fg["white"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log a warning "${text}" to the console in yellow bg color and red text color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.warningBg(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bg["yellow"],
        option.bright,
        option.fg["red"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log "${text}" to the console in red bg color and white text color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.redBg(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bg["red"],
        option.bright,
        option.fg["white"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log "${text}" to the console in green bg color and white text color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.greenBg(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bg["green"],
        option.bright,
        option.fg["white"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log "${text}" to the console in yellow bg color and red text color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.yellowBg(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bg["yellow"],
        option.bright,
        option.fg["red"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log "${text}" to the console in blue bg color and white text color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.blueBg(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bg["blue"],
        option.bright,
        option.fg["white"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log "${text}" to the console in magenta bg color and white text color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.magentaBg(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bg["magenta"],
        option.bright,
        option.fg["white"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log "${text}" to the console in cyan bg color and white text color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.cyanBg(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bg["cyan"],
        option.bright,
        option.fg["white"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });

  it(`should log "${text}" to the console in white bg color and black text color`, function () {
    const consoleSpy = sinon.spy(console, "log");
    PrismLogger.whiteBg(text);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(
      consoleSpy.calledWith(
        option.reset,
        option.bg["white"],
        option.bright,
        option.fg["black"] + "\r",
        text,
        option.reset
      )
    ).to.be.true;

    consoleSpy.restore();
  });
});
