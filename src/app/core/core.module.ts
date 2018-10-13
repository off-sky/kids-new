import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterService } from './services/router.service';
import { SchoolService } from './services/school.service';
import { SchoolSelectService } from './services/school-select.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    RouterService,
    SchoolService,
    SchoolSelectService
  ]
})
export class CoreModule { }
