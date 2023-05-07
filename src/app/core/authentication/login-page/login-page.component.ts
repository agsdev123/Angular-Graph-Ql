import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    // const { org } = AdminRoutes
    console.log("clicked")
    this.router.navigate(['sbom/dashboard'])
    // RouterLink("/admin/customee")
  }

}
