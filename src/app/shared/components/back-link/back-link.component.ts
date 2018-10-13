import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'y-back-link',
  templateUrl: './back-link.component.html',
  styleUrls: ['./back-link.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BackLinkComponent implements OnInit {

  @Input() public url: string[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public onClick(): void {
    this.router.navigate(this.url);
  }

}
