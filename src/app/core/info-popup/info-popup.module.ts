import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPopupComponent } from './info-popup/info-popup.component';
import { InfoPopupService } from './info-popup.service';

@NgModule({
  imports: [
    CommonModule
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
