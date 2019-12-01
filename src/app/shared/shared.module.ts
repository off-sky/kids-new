import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { CardsWrapComponent } from './components/cards-wrap/cards-wrap.component';
import { CardComponent } from './components/card/card.component';
import { CompanySelectPopupComponent } from './components/company-select-popup/company-select-popup.component';
import { SectionComponent } from './components/section/section.component';
import { SectionContentComponent } from './components/section-content/section-content.component';
import { GoHomeComponent } from './components/go-home/go-home.component';
import { CrumbsComponent } from './components/crumbs/crumbs.component';
import { CrumbComponent } from './components/crumb/crumb.component';
import { FoldListItemComponent } from './components/fold-list-item/fold-list-item.component';
import { FoldListAnchorComponent } from './components/fold-list-anchor/fold-list-anchor.component';
import { FoldListContentComponent } from './components/fold-list-content/fold-list-content.component';
import { FoldListContentItemComponent } from './components/fold-list-content-item/fold-list-content-item.component';
import { BackLinkComponent } from './components/back-link/back-link.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { NoResultsPlaceholderComponent } from './components/no-results-placeholder/no-results-placeholder.component';
// Material
import { MatDialogModule } from '@angular/material/dialog';
import { PopupHeaderComponent } from './components/popup-header/popup-header.component';
import { PopupActionBarComponent } from './components/popup-action-bar/popup-action-bar.component';
import { CloseBtnComponent } from './components/close-btn/close-btn.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { InfoLabelComponent } from './components/info-label/info-label.component';
import { InfoTextComponent } from './components/info-text/info-text.component';
import { CaptchaDirective } from './directives/captcha.directive';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //Material
    MatDialogModule,

    RouterModule
  ],
  declarations: [
    BackLinkComponent,
    CardsWrapComponent,
    CardComponent,
    CompanySelectPopupComponent,
    CrumbsComponent,
    CrumbComponent,
    FoldListAnchorComponent,
    FoldListContentComponent,
    FoldListContentItemComponent,
    FoldListItemComponent,
    InfoBlockComponent,
    InfoLabelComponent,
    InfoTextComponent,
    GoHomeComponent,
    NoResultsPlaceholderComponent,
    SearchInputComponent,
    SectionComponent,
    SectionContentComponent,
    SectionTitleComponent,
    TopBarComponent,
    WorkInProgressComponent,
    PopupHeaderComponent,
    PopupActionBarComponent,
    CloseBtnComponent,
    CaptchaDirective,
    FooterComponent
  ],
  exports: [
    BackLinkComponent,
    CaptchaDirective,
    CardsWrapComponent,
    CardComponent,
    CrumbsComponent,
    CrumbComponent,
    FoldListAnchorComponent,
    FoldListContentComponent,
    FoldListContentItemComponent,
    FoldListItemComponent,
    InfoBlockComponent,
    InfoLabelComponent,
    InfoTextComponent,
    GoHomeComponent,
    // Material
    MatDialogModule,
    NoResultsPlaceholderComponent,
    PopupHeaderComponent,
    SearchInputComponent,
    SectionComponent,
    SectionContentComponent,
    SectionTitleComponent,
    TopBarComponent,
    WorkInProgressComponent,
    FooterComponent
  ]
})
export class SharedModule { }
