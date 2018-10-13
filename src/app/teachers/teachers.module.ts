import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRootComponent } from './list-root/list-root.component';
import { SharedModule } from '../shared/shared.module';
import { TeacherCardComponent } from './teacher-card/teacher-card.component';
import { TeacherService } from './teacher.service';
import { TeachersByOfficeComponent } from './teachers-by-office/teachers-by-office.component';
import { RouterModule } from '@angular/router';
import { TeachersByOfficeResolverService } from './teachers-by-office/teachers-by-office.resolver.service';
import { TeacherDetailsResolverService } from './teacher-details/teacher-details-resolver.service';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    TeacherService,
    TeacherDetailsResolverService,
    TeachersByOfficeResolverService
  ],
  declarations: [
    ListRootComponent,
    TeacherCardComponent,
    TeachersByOfficeComponent,
    TeacherDetailsComponent
  ]
})
export class TeachersModule { }
