import { Route } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ReviewsResolver } from './reviews-resolver';

export const landingRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        resolve: {
            reviews: ReviewsResolver
        },
        component: LandingComponent
    }
];