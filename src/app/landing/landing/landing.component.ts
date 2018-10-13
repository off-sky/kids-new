import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { reviews } from '../../../types/reviews';
import { InfoPopupService } from '../../core/info-popup/info-popup.service';

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
  public reviews: reviews.Review[];
  @ViewChild('contactForm') public contactForm: ElementRef;

  constructor(
    private matDialog: MatDialog,
    private infoPopup: InfoPopupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = this.route.snapshot.data.reviews;
    console.log(this.reviews);
  }


  public scrollFormIntoView(): void {
    if (this.contactForm) {
      const el  = this.contactForm.nativeElement as HTMLDivElement;
      window.requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth'}));
    }
  }


  public openReviewDetails(rev: reviews.Review): void {
    this.infoPopup.open('Відгук', rev.text);
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
