import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterService } from './services/router.service';
import { SchoolService } from './services/school.service';
import { SchoolSelectService } from './services/school-select.service';
import { ApplyLessonService } from './services/apply-lesson.service';
import { ReviewService } from './services/review.service';
import { InfoPopupModule } from './info-popup/info-popup.module';
import { InfoPopupService } from './info-popup/info-popup.service';


@NgModule({
  imports: [
    CommonModule,
    InfoPopupModule
  ],
  providers: [
    ApplyLessonService,
    InfoPopupService,
    ReviewService,
    RouterService,
    SchoolService,
    SchoolSelectService
  ]
})
export class CoreModule { }
