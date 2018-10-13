import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReviewsResolver } from './reviews-resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  declarations: [LandingComponent],
  providers: [
    ReviewsResolver
  ],
  exports: [
    LandingComponent
  ]

})
export class LandingModule { }
