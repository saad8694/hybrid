import fs from 'fs';
import path from 'path';

const logFolder = path.resolve(process.cwd(), 'logs');
if (!fs.existsSync(logFolder)) {
  fs.mkdirSync(logFolder, { recursive: true });
}

const logFile = path.join(logFolder, 'execution.log');

export class Logger {
  static info(message: string): void {
    const payload = `[INFO] ${new Date().toISOString()} - ${message}`;
    console.log(payload);
    fs.appendFileSync(logFile, `${payload}\n`);
  }

  static warn(message: string): void {
    const payload = `[WARN] ${new Date().toISOString()} - ${message}`;
    console.warn(payload);
    fs.appendFileSync(logFile, `${payload}\n`);
  }

  static error(message: string): void {
    const payload = `[ERROR] ${new Date().toISOString()} - ${message}`;
    console.error(payload);
    fs.appendFileSync(logFile, `${payload}\n`);
  }
}
