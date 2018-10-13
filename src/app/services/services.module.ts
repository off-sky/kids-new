import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRootComponent } from './list-root/list-root.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ListByOfficeComponent } from './list-by-office/list-by-office.component';
import { ServicesService } from './services.service';
import { LangByOfficeResolver } from './list-by-office/lang-by-office-resolver.service';
import { ServicesDetailsResolver } from './details/services-details-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ListRootComponent,
    DetailsComponent,
    ListByOfficeComponent
  ],
  providers: [
    ServicesService,
    LangByOfficeResolver,
    ServicesDetailsResolver
  ]
})
export class ServicesModule { }
