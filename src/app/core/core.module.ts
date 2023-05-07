import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './authentication/login-page/login-page.component'; 
import { PasswordModule } from "primeng/password";
// import { EnterOtpComponent } from './authentication/enter-otp/enter-otp.component';
// import { UpdatePasswordComponent } from './authentication/update-password/update-password.component';



@NgModule({
  declarations: [ 
    // EnterOtpComponent,
    // UpdatePasswordComponent
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    PasswordModule
  ]
})
export class CoreModule { }
