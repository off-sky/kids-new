import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CSSPlugin, AttrPlugin }  from "gsap/all";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LandingModule } from './landing/landing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { CompanySelectPopupComponent } from './shared/components/company-select-popup/company-select-popup.component';


// prevent tree-shaking of these plugins
// const plugins = [ CSSPlugin, AttrPlugin ];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    HomeModule,
    LandingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CompanySelectPopupComponent
  ]
})
export class AppModule { }
