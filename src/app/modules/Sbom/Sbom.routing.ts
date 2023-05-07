import { SbomComponent } from './Sbom.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/Home/Home.component';
import { DashboardComponent } from './pages/Dashboard/Dashboard.component';






const routes: Routes = [
  // {path:"create-template", component:CreateTemplateComponent},
  {
    path: "sbom",
    component: SbomComponent,
    // canActivate: [AuthGuard]
    children: [

      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },

    ],
  },

  // {path : "login", component:LoginPageComponent},

  // {path:"vendors",component:VendorAssesmentComponent}
];




export const SbomRoutes = RouterModule.forChild(routes);
