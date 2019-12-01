import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { reviews } from '../../../types/reviews';
import { InfoPopupService } from '../../core/info-popup/info-popup.service';
import { appl } from '../../../types/application';
import { ApplyLessonService } from '../../core/services/apply-lesson.service';
import { common } from '../../../types';
import { take, switchMap, map } from 'rxjs/operators';
import { schools } from '../../../types/schools';
import { TeacherService } from '../../teachers/teacher.service';
import { teachers } from '../../../types/teachers';

@Component({
  selector: 'y-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {

  public customerForm = new appl.ContactApplication();
  public isSubmitting = false;
  public isSubmitted = false;
  public reviews: reviews.Review[];
  public Languages = common.Languages;
  public contactNums: string[] = [];
  @ViewChild('contactForm') public contactForm: ElementRef;

  constructor(
    private matDialog: MatDialog,
    private infoPopup: InfoPopupService,
    private route: ActivatedRoute,
    private router: Router,
    private applicationService: ApplyLessonService,
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.reviews = this.route.snapshot.data.reviews;
    this.route.parent.data
      .pipe(
        map(data => {
          const school = data.school as schools.School;
          if (school) {
            const proms =  school.contactIds
              .map(id => this.teacherService.getTeacherById(id))
            Promise.all(proms)
              .then((teachs: any[]) => {
                console.log({ teachs });
                this.contactNums = []
                teachs.forEach(t => {
                  if (t) {
                    this.contactNums.push(...t.phones)
                  }
                })
                console.log({ nums: this.contactNums});
              });
          }
        })
      )
     .subscribe();
  }


  public scrollFormIntoView(): void {
    if (this.contactForm) {
      const el  = this.contactForm.nativeElement as HTMLDivElement;
      window.requestAnimationFrame(() => el.scrollIntoView({ behavior: 'instant'}));
    }
  }


  public openReviewDetails(rev: reviews.Review): void {
    this.infoPopup.open(`Відгук, ${rev.authorName}`, rev.text);
  }


  public onCaptchaSubmit(event): void {
      this.customerForm.captchaToken = event;
  }

  public onLangClick(lang: common.Language): void {
    this.route.parent.data
      .pipe(
        take(1)
      )
      .subscribe((data) => {
        const school = data.school as schools.School;
        if (school) {
          this.router.navigate([school.id, 'services', lang ])
        }
      });
   
  }


  public async onContactFormSubmit(): Promise<void> {
     if (this.customerForm.isValid) {
       this.isSubmitting = true;
       try {
          await this.applicationService.sendApplication(this.customerForm);
          this.isSubmitting = false;
          this.isSubmitted = true;
       } catch (err) {
         console.log(err);
         this.isSubmitting = false;
       }
       
     }
  }


  public onFormRowClick(label: HTMLDivElement, input: HTMLInputElement, prop: string) {
    if ((!input.value || input.value === '')) {
      label.classList.remove('floatbottom');
      label.classList.add('floattop');
      label.classList.add('blue-accent-font');
      input.classList.add('blue-accent-border');
    }
    input.focus();
  }

  public onFormInputBlur(label: HTMLDivElement, input: HTMLInputElement, prop: string) {
    if (!input.value || input.value === '') {
      label.classList.remove('floattop');
      label.classList.remove('blue-accent-font');
      input.classList.remove('blue-accent-border');
      label.classList.add('floatbottom');
    }
  }


}
