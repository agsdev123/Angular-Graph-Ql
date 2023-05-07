
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { LoginComponent } from "./core/authentication/login/login.component";
import { LoginPageComponent } from "./core/authentication/login-page/login-page.component";


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },

  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule { }
