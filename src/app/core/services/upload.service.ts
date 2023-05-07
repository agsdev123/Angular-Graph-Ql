import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import * as AWS from "aws-sdk/global";
import * as S3 from "aws-sdk/clients/s3";
import { BehaviorSubject, Subject, map } from "rxjs";
import { LoggerService } from "../Logger/logger-service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class UploadService {
  FOLDER: any;
  Uploaddata = new Subject<any>();
  private _todo = new BehaviorSubject<any>([]);
  readonly todos$ = this._todo.asObservable();
  constructor(private log: LoggerService, private _http: HttpClient) {}

  uploadFile(file: any, callback): any {
    const contentType = file.type;
    const bucket = new S3({
      region: "ap-south-1",
      accessKeyId: "AKIAUCJ3HQRT2EX5ETET",
      secretAccessKey: "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",
    });
    const params = {
      Bucket: "ub-dev-image-uploader",
      Key: file.name,
      Body: file,
      ACL: "public-read",
      ContentType: contentType,
    };
    bucket.upload(params, function (err: any, data: any): any {
      if (err) { 
        return false;
      }
      if (data) {
        callback(data);
      }
    });
  }

  Fileupload(info: any) {
    return this._http
      .post<any>(environment.endpoints.FILEUPLOAD_API_URL, info)
      .pipe(map((response) => response));
  }
}
