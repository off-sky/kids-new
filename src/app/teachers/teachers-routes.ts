import { Route } from "@angular/router";
import { ListRootComponent } from './list-root/list-root.component';
import { TeachersByOfficeComponent } from "./teachers-by-office/teachers-by-office.component";
import { TeachersByOfficeResolverService } from "./teachers-by-office/teachers-by-office.resolver.service";
import { TeacherDetailsComponent } from "./teacher-details/teacher-details.component";
import { TeacherDetailsResolverService } from "./teacher-details/teacher-details-resolver.service";

export const teachersRoutes: Route[] = [
    {
        path: 'teachers',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: TeachersByOfficeComponent,
                resolve: {
                    teachers: TeachersByOfficeResolverService
                }
            },
            // {
            //     path: 'list/:officeId',
            //     component: TeachersByOfficeComponent,
            //     resolve: {
            //         teachers: TeachersByOfficeResolverService
            //     }
            // },
            {
                path: ':teacherId',
                component: TeacherDetailsComponent,
                resolve: {
                    teacher: TeacherDetailsResolverService
                }
            }
        ]
    }
];