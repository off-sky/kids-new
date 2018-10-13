import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'y-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {

  public customerForm = {
    name: '',
    email: '',
    phone: '',
    service: ''
  }

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public onFormRowClick(label: HTMLDivElement, input: HTMLInputElement, prop: string) {
    console.log('On click');
    if (this.customerForm[prop] === '') {
      label.classList.remove('floatbottom');
      label.classList.add('floattop');
      label.classList.add('blue-accent-font');
      input.classList.add('blue-accent-border');
    }
    input.focus();
  }

  public onFormInputBlur(label: HTMLDivElement, input: HTMLInputElement, prop: string) {
    console.log('On blur');
    console.log(this.customerForm[prop]);
    if (this.customerForm[prop] === '') {
      label.classList.remove('floattop');
      label.classList.remove('blue-accent-font');
      input.classList.remove('blue-accent-border');
      label.classList.add('floatbottom');
    }
  }


}
