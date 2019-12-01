import { Directive, Input, OnInit, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export interface ReCaptchaConfig {
  theme? : 'dark' | 'light';
  type? : 'audio' | 'image';
  size? : 'compact' | 'normal';
  tabindex? : number;
}

let grecaptcha: any;

@Directive({
  selector: '[yCaptcha]'
})
export class CaptchaDirective implements OnInit, AfterViewInit, ControlValueAccessor {

  
  @Input() config: ReCaptchaConfig = {};
  @Input() lang: string;
  @Output() public submitted: EventEmitter<string> = new EventEmitter<string>();

  public publicKey: string = '6Lcx5nQUAAAAAN3jgKPPIgZ-BS07vbsgIfufcTAf';
  private widgetId: number;
  private window = window as any;
  private changeFn: any;


  constructor(
    private element: ElementRef
  ) { }


  addScript() {
    let script = document.createElement('script');
    const lang = this.lang ? '&hl=' + this.lang : '';
    script.src = `https://www.google.com/recaptcha/api.js?onload=reCaptchaLoad&render=explicit${lang}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
    this.changeFn = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }
  ngAfterViewInit(): void {
   
  }
  ngOnInit(): void {
    this.registerReCaptchaCallback();
    this.addScript();
  }

  registerReCaptchaCallback() {
    this.window.reCaptchaLoad = () => {
      const config = {
        ...this.config,
        'sitekey': this.publicKey,
        'callback': this.onSuccess.bind(this),
        'expired-callback': this.onExpired.bind(this)
      };
      this.widgetId = this.render(this.element.nativeElement, config);
    };
  }

  private render( element : HTMLElement, config ) : number {
    return this.window.grecaptcha.render(element, config);
  }

  private onSuccess(token: string): void {
    this.submitted.emit(token);
    // console.log('Captcha passed. Token: ', token);
    // this.changeFn(token);
  }

  private onExpired(): void {
    this.submitted.emit(undefined);
    // console.log('Captcha expired');
  }

}
