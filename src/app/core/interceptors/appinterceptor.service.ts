import { LoaderService } from "./../services/loader.service";
import { AuthService } from "./../services/auth.service";
import { environment } from "./../../../environments/environment";

import { Router } from "@angular/router";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
  HttpEvent,
  HttpResponse,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import * as Sentry from "@sentry/angular";
import { finalize, retry, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable, catchError, EMPTY } from "rxjs";
import { MessageService } from "primeng/api";
import { LoggerService } from "../Logger/logger-service";
const listurlPostbasedata: any = [
  
  environment.endpoints.REPUTATION,
];
@Injectable({
  providedIn: "root",
})
export class AppinterceptorService implements HttpInterceptor {
  constructor(
    private router: Router,
    public loaderService: LoaderService,
    private messageService: MessageService,
    private authService: AuthService,

    private log: LoggerService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string | null = localStorage.getItem("token");
    this.loaderService.show();
    if (token) {
      req = req.clone({
        // headers: req.headers.set("Authorization", "Bearer " + token),
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.authService.getToken()}`,
        }),
      });
    }

    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set("Content-Type", "application/json"),
      });
    }
    if (req.urlWithParams.startsWith(`http://20.231.227.211:8080`)) {
      req = req.clone({
        setHeaders: {
          Authorization: "",
          "x-api-key": "17a110cd4d2c10b5939282d3ffc4514a",
        },
      });
    }

    req = req.clone({
      headers: req.headers.set("Accept", "application/json"),
      //environment.BaseUrl
      url:
        //'http://20.231.227.211:8080/'
        req.url, //.replace("http://", "https://")
    });
   
      return next
        .handle(req)
        .pipe(
          tap((event) => {
            this.log.logInfo("event", event.type);
            if (
              event instanceof HttpResponse &&
              !listurlPostbasedata.includes(req.url)
            ) {
              if (
                event.body &&
                event.body.error === true &&
                event.body.errorMessage
              ) {
                this.messageService.add({
                  key: "notification",
                  severity: "error",
                  summary: "Woops! There was an error!",
                });
              } else {
                this.log.logInfo("event", event);
                  if (req.method !== "GET" ) {
                this.messageService.add({
                  key: "notification",
                  severity: "success",
                  summary: "Success",
                  // summary: 'Woops! There was an error!',
                });
              }
              }
            }
          })
        )
        .pipe(
          catchError((err) => {
            this.log.logError(
              "err",
              err.error,
              err.error.message,
              err.error.status
            );

            if (err.error.status === 400 || err.status === 400) {
              this.messageService.add({
                key: "notification",
                severity: "error",
                summary:
                  err.error.message ?? "Woops! There was an error!",
              });
            } else if (err.error.status === 401 || err.status === 401) {
              this.log.logError("err..", err);
              this.messageService.add({
                key: "notification",
                severity: "error",
                summary:
                  "Session expired login again",
              });
              localStorage.clear();
              this.router.navigate(["/login"]);
            } else if (err.error.status === 500 || err.status === 500) {
              this.messageService.add({
                key: "notification",
                severity: "error",
                summary:
                  err.error.message ??
                  err.error ??
                  "Woops! There was an error!",
              });
            } else {   
              if (!listurlPostbasedata.includes(req.url)){
              this.messageService.add({

                key: "notification",
                severity: "error",
                summary:
                  err.error ??
                  err.error.message ??
                  "Woops! There was an error!",
              });
            }
            }
            Sentry.captureException(
              "there is error in fetching the data from these url : " + req.url
            );
            return EMPTY;
          })
        )
        .pipe(finalize(() => this.loaderService.hide()));
    // } else {
    //   return next.handle(req).pipe(finalize(() => this.loaderService.hide()));
    // }
  }
  errorHandler(error: HttpErrorResponse) {
    // this.toastr.error("error");
    this.log.logError("error", error);
    return "";
  }
}
