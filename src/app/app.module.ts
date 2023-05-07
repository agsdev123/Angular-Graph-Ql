import { GraphqlService } from './core/services/graphql.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordModule } from "primeng/password";
import { HeaderComponent } from './shared/Header/Header.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {AvatarModule} from 'primeng/avatar';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { DialogModule } from "primeng/dialog";
import {
  HttpBackend,
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from './core/core.module';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    PasswordModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    FormsModule, ReactiveFormsModule,
    // HeaderComponent,
    OverlayPanelModule,
    AvatarModule,
    TabViewModule,
    TableModule,
    GraphQLModule

  ],
  providers: [GraphqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
