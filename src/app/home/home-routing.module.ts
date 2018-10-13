import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { servicesRoutes } from '../services/services-routes';
import { landingRoutes } from '../landing/landing-routes';
import { teachersRoutes } from '../teachers/teachers-routes';
import { HomeComponent } from './home/home.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { SchoolResolver } from './school-resolver.service';
import { common } from '../../types';

export const DEFAULT_SCHOOL_ID = 'narodna_volia';

export const homePaths: Route[] = [
  {
    path: ':schoolId',
    component: HomeComponent,
    resolve: {
      school: SchoolResolver
    },
    children: [
      ...landingRoutes,
      ...servicesRoutes,
      ...teachersRoutes,
      {
        path: 'contact-info',
        component: ContactInfoComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: DEFAULT_SCHOOL_ID
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homePaths)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
