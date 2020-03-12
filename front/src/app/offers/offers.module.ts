import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';
import { OfferValidComponent } from './offer-valid/offer-valid.component';
import { OffersRoutingModule } from './offers-routing.module';


@NgModule({
  declarations: [OfferAddComponent, OfferListComponent, OfferEditComponent, OfferValidComponent],
  imports: [
    CommonModule,
    FormsModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
