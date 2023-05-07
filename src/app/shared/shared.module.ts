import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SidebarModule } from 'primeng/sidebar';
import { NgxEchartsModule } from 'ngx-echarts';
import { AvatarModule } from 'primeng/avatar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { HeaderComponent } from './Header/Header.component';
// import { OverlayPanel } from 'primeng/overlaypanel';
import {CheckboxModule} from 'primeng/checkbox';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {PasswordModule} from 'primeng/password';

import * as echarts from 'echarts';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabViewModule,
    DividerModule,
    AccordionModule,
    TableModule,
    SidebarModule,
    DropdownModule,
    InputSwitchModule,
    CardModule,
    AvatarModule,
    PaginatorModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    CalendarModule,
    SelectButtonModule,
    ButtonModule,
    InputTextModule,
    ScrollPanelModule,
    BreadcrumbModule,
    DialogModule,
    ProgressSpinnerModule,
    SplitButtonModule,
    OverlayPanelModule,
    PasswordModule
  ],
  declarations: [
    // CardComponent,
    // PolarChartComponent,
    // RiskmeterComponent,
    // AreaChartComponent,
     SideBarComponent,
    HeaderComponent,
    // ComingSoonComponent,
    // CompanyOverviewChartComponent,
    // DatePickerComponent,LocalFiltersComponent
  ],
  exports: [
    // CardComponent,
    // PolarChartComponent,
    // RiskmeterComponent,
    // AreaChartComponent,
     SideBarComponent,
    HeaderComponent,
    // ComingSoonComponent,
    // CompanyOverviewChartComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
