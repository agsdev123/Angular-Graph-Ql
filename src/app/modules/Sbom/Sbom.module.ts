import { SbomComponent } from './Sbom.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AdminComponent } from './admin.component';

// import { AdminRoutes } from './admin.routing';

import { SharedModule } from "../../shared/shared.module";


import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { DividerModule } from 'primeng/divider';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from "primeng/avatar";
import { FileUploadModule } from "primeng/fileupload";

import { CalendarModule } from "primeng/calendar";
import {PasswordModule} from 'primeng/password';
import { SbomRoutes } from './Sbom.routing';
import { DashboardComponent } from './pages/Dashboard/Dashboard.component';
import { HomeComponent } from './pages/Home/Home.component';

@NgModule({
    declarations: [
      SbomComponent,
        DashboardComponent,
        HomeComponent

    ],
    imports: [
        CommonModule,
        SbomRoutes,
        SharedModule,
        CheckboxModule,
        DividerModule,
        RadioButtonModule,
        ButtonModule,
        TableModule,
        PaginatorModule,
        AvatarModule,
        FileUploadModule,
        CalendarModule,
        PasswordModule

    ]
})
export class SbomModule { }
