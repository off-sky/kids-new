import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoPopupComponent } from './info-popup/info-popup.component';

@Injectable()
export class InfoPopupService {

  constructor(
    private matDialog: MatDialog
  ) { }


  public open(header: string, text: string): void {
    this.matDialog.open(InfoPopupComponent, {
      position: {
        top: '30px'
      },
      data: {
        header,
        text
      }
    });
  }

}
