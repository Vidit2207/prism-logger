import { PrismLogger } from "../src/";

const logger = new PrismLogger();
const runTests = () => {
  const temp = "This should be ";
  logger.log(temp + "RED text", "red");
};

runTests();
