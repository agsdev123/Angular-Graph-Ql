import { AuthInterface } from "./../models/auth-interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private user1 = { username: "", password: "" };
  private _loginUserURL = environment.endpoints.LOGIN_API_URL;
  private _forgetpasswordUserURL = environment.endpoints.FORGETPASSWORD_API_URL;
  private _resetpasswordUserURL = environment.endpoints.RESET_API_URL;
  private _logOutUserURL = environment.endpoints.LOGOUT_API_URL;
  private _getOrgdetailsURL = environment.endpoints.GET_ORG_DETAILS_API_URL;
  private _getScandetailsURL=environment.endpoints.GET_SCAN_DETAILS_API_URL;
  constructor(private _http: HttpClient, private _router: Router) {}
  loginUser(user: AuthInterface) {
    (this.user1.username = user.email), (this.user1.password = user.password);
    //   let body = new URLSearchParams();
    //   body.set('grant_type', "password");
    //   body.set('client_id', 'mobile');
    //   body.set('client_secret', "password");
    //   body.set('scope', 'READ WRITE');
    // body.set('username',user.email)
    // body.set('password',user.password)
    // let options = {
    //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    // };
    return this._http
      .post<AuthInterface>(this._loginUserURL, this.user1)
      .pipe(map((response) => response.token));
  }
  forgetUpdatePassword(info: any) {
    return this._http
      .put<string>(`${this._forgetpasswordUserURL}/${info}`,{
  observe: 'body', responseType: 'text'
})
      .pipe(map((response) => response));
  }
  resetPassword(info: any) {
    return this._http
      .post<any>(this._resetpasswordUserURL, info)
      .pipe(map((response) => response));
  }

  isLoggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logoutUser() {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }
  getorgdetails() {
    return this._http
      .get(this._getOrgdetailsURL)
      .pipe(map((response) => response));
  }
  getScandetails(domain:any) {
     
    return this._http
      .get(`${this._getScandetailsURL}/${domain}`)
      .pipe(map((response) => response));
  }
  public logout() {
    return this._http
      .post(this._logOutUserURL, {})
      .pipe(map((response) => response));
  }
}
