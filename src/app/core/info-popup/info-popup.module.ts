import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPopupComponent } from './info-popup/info-popup.component';
import { InfoPopupService } from './info-popup.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    InfoPopupComponent
  ],
  // providers: [
  //   InfoPopupService
  // ],
  entryComponents: [
    InfoPopupComponent
  ]
})
export class InfoPopupModule { }
