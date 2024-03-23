declare class PrismLogger {
  constructor();
  log(text: string | number | object, color?: string): void;
  error(text: string | number | object): void;
  success(text: string | number | object): void;
  warning(text: string | number | object): void;
  red(text: string | number | object): void;
  green(text: string | number | object): void;
  yellow(text: string | number | object): void;
  blue(text: string | number | object): void;
  magenta(text: string | number | object): void;
  cyan(text: string | number | object): void;
  white(text: string | number | object): void;
  logBg(text: string | number | object, font?: string, bg?: string): void;
}

export default { PrismLogger };
