# PrismLogger

A simple and colorful logger for Node.js applications.

## Installation

You can install `PrismLogger` using npm:

```bash
npm install prism-logger
```

## Usage

1. Import the `PrismLogger` class from prism-logger

```js
import { PrismLogger } from "prism-logger";
```

2. Use the varius log functions provided. For instance,

```js
PrismLogger.yellow("This will be printed in yellow");
// The yellow() logs the text in yellow font
```

Pretty simple, right? Well that's the purpose of this package. There's also a way to make your own custom logger. But let's discuss it later.

First let's dicuss other built-in log functions.

### Available Methods

##### Changing only the text color

| Function   | Use                                   |
| ---------- | ------------------------------------- |
| .error()   | Logs an error message in red text     |
| .success() | Logs a success message in green text  |
| .warning() | Logs a warning message in yellow text |
| .red()     | Logs a message in red text            |
| .green()   | Logs a message in green text          |
| .yellow()  | Logs a message in yellow text         |
| .blue()    | Logs a message in blue text           |
| .magenta() | Logs a message in magenta text        |
| .cyan()    | Logs a message in cyan text           |
| .white()   | Logs a message in white text          |

##### Changing the background color

| Function     | Use                                           |
| ------------ | --------------------------------------------- |
| .errorBg()   | Logs an error message with red background     |
| .successBg() | Logs a success message with green background  |
| .warningBg() | Logs a warning message with yellow background |
| .redBg()     | Logs a message with red background            |
| .greenBg()   | Logs a message with green background          |
| .yellowBg()  | Logs a message with yellow background         |
| .blueBg()    | Logs a message with blue background           |
| .magentaBg() | Logs a message with magenta background        |
| .cyanBg()    | Logs a message with cyan background           |
| .whiteBg()   | Logs a message with white background          |

That's all for the built-in functions. Now let's talk about making your own custom logs.

You can use the .logBg() to create a custom log.

```js
PrismLogger.logBg("Your message", "blue", "white");
// This will create a log with white background and blue text
```

You can use any of the following colors:

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- gray

## Examples

```js
import { PrismLogger } from "@your-username/prism-logger";

const logger = new PrismLogger();

logger.log("Hello, world!", "cyan");
logger.error("Something went wrong");
logger.success("Task completed successfully");
logger.warning("Be cautious!");

logger.logBg("This is a log with custom colors", "white", "blue");
logger.errorBg("This is an error with red background");
```
