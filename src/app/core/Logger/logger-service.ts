import { environment } from "./../../../environments/environment";
import { Injectable, isDevMode } from "@angular/core";
import { ConfigService, LoggingLevel } from "./config-service";
// import { isDevMode } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  private _level: LoggingLevel = LoggingLevel.Info;

  constructor(config: ConfigService) {
    if (config.loggingLevel) {
      this._level = config.loggingLevel;
    }
  }
  private shouldLog(level: LoggingLevel) {
    if (this._level === LoggingLevel.None) {
      return false;
    } else if (this._level === LoggingLevel.Errors) {
      return level === LoggingLevel.Errors;
    } else if (this._level === LoggingLevel.Warnings) {
      return level === LoggingLevel.Errors || level === LoggingLevel.Warnings;
    } else if (this._level === LoggingLevel.Info) {
      return (
        level === LoggingLevel.Errors ||
        level === LoggingLevel.Warnings ||
        level === LoggingLevel.Info
      );
    } else {
      return true;
    }
  }
  log(message: any, level = LoggingLevel.Warnings, ...optionalParams: any[]) {
    if (environment.production) {
      return;
    }
    if (true) {
      switch (level) {
        case LoggingLevel.Errors:
          console.error(message, optionalParams);
          break;
        case LoggingLevel.Warnings:
          console.warn(message, optionalParams);
          break;
        case LoggingLevel.Info:
          console.info(message, optionalParams);
          break;
        default:
          console.debug(message, optionalParams);
      }
    }
  }
  logError(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.Errors, optionalParams);
  }

  logWarning(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.Warnings, optionalParams);
  }

  logInfo(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.Info, optionalParams);
  }

  logVerbose(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.Verbose, optionalParams);
  }
}
