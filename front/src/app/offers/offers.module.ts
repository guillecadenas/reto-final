import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';
import { OfferValidComponent } from './offer-valid/offer-valid.component';

@NgModule({
  declarations: [OfferAddComponent, OfferListComponent, OfferEditComponent, OfferValidComponent],
  imports: [
    CommonModule
  ]
})
export class OffersModule { }
