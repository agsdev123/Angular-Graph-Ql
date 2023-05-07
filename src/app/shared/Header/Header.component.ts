import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocalService } from 'src/app/core/services/local.service';
import { AuthService } from "src/app/core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HeaderComponent implements OnInit {

  constructor(private localStore: LocalService, private _auth: AuthService, private router: Router,) { }

  ngOnInit() {
  }
  get OrgName(): any {
    return this.localStore.getOrgName();
  }
  get Orgdomain(): any {
    return this.localStore.getOrgdomain();

  }
  get firstName(): any {
    return this.localStore.getData('user')?.firstName;
  }

  get lastName(): any {
    return this.localStore.getData('user')?.lastName;
  }
  logout() {
    this._auth.logout().subscribe((res) => {
      if (res) {
        localStorage.clear();
        this.router.navigate(["/login"]);
      }
    });
  }
}
