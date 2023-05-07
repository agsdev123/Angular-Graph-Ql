import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import routeConstant from "../constants/route";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate() {
    const {login}=routeConstant.common;
    if (this._authService.isLoggedIn()) {
      return true;
    } else {
      // this._router.navigate(['/login'])

      this._router.navigate([login]);
      return false;
    }
  }
}
