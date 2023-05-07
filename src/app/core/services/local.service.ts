import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";
import { LoggerService } from "../Logger/logger-service";

@Injectable({
  providedIn: "root",
})
export class LocalService {
  key = "4512";

  constructor(private log: LoggerService) {}

  public saveData(key: any, value: any) {
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: any) {
    let data = localStorage.getItem(key) || "";
    return this.decrypt(data);
  }
  public removeData(key: any) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
  public(key: any) {
    localStorage.removeItem(key);
  }
  getOrgdomain() {
    return this.getData("user")?.customer?.orgId?.primaryDomain?.domainName;
  }
   getOrgName() {
    return this.getData("user")?.customer?.orgId?.clientOrgName;
  }
     getOrgId() {
    return this.getData("user")?.customer?.orgId?.clientOrgId;
  }
  private encrypt(data: any): any {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.key).toString();
    } catch (e) {
      this.log.logWarning(e);
    }
  }

  private decrypt(data: any) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, this.key);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      this.log.logWarning(e);
    }
  }
}
