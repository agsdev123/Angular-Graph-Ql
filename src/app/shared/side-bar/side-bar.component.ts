// import { routeConstant } from 'src/app/core/constants/route';
// import { SidebarviewService } from './../../../core/services/sidebarview.service';
// import { LocalService } from './../../../core/services/local.service';
import {
  Component,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { TranslateService } from "@ngx-translate/core";

import { AuthService } from "src/app/core/services/auth.service";
import { map, Observable, Subject } from "rxjs";
import routeConstant from "src/app/core/constants/route";

import { LocalService } from "src/app/core/services/local.service";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SideBarComponent implements OnInit {
  sideBarData: any[];

  constructor(

  ) {
    this.sideBarData = [
      {
        class: "Dashboard_sidebar_data",
        routerLink: 'dashboard',
        routerLinkActive: "active",
        title: 'Dashboard',
        image: "../../../assets/organisationMode.svg"

      },
      {
        class: "Dashboard_sidebar_data",
        routerLink: 'home',
        routerLinkActive: "active",
        title: 'Home',
        image: "../../../assets/organisationMode.svg"

      }

    ];
  }
  ngOnInit(): void {
    
  }

}
