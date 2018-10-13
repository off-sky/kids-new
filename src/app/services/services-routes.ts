import { Route } from '@angular/router';
import { ListRootComponent } from './list-root/list-root.component';
import { DetailsComponent } from './details/details.component';
import { ListByOfficeComponent } from './list-by-office/list-by-office.component';
import { LangByOfficeResolver } from './list-by-office/lang-by-office-resolver.service';
import { ServicesDetailsResolver } from './details/services-details-resolver.service';


export const servicesRoutes: Route[] = [
    {
        path: 'services',
        children: [
            {
                path: '',
                pathMatch: 'full',
                resolve: {
                    langs: LangByOfficeResolver
                },
                component: ListByOfficeComponent
            },
            {
                path: ':lang',
                component: DetailsComponent,
                resolve: {
                    categories: ServicesDetailsResolver
                }
            }

        ]
    }
];