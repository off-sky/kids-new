import { Route } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const landingRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingComponent
    }
];