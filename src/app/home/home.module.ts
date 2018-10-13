import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';
import { TeachersModule } from '../teachers/teachers.module';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { SchoolResolver } from './school-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,

    // feature modules
    ServicesModule,
    TeachersModule
  ],
  providers: [
    SchoolResolver
  ],
  declarations: [HomeComponent, ContactInfoComponent]
})
export class HomeModule { }
