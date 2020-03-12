/**
 * @author Pedro Núñez
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferValidComponent} from './offer-valid/offer-valid.component';
import {OfferListComponent} from './offer-list/offer-list.component';
import {OfferEditComponent} from './offer-edit/offer-edit.component';
import {OfferAddComponent} from './offer-add/offer-add.component';

const ownerRoutes: Routes = [
  {path: 'offers/valid', component: OfferValidComponent},
  {path: 'offers/add', component: OfferAddComponent},
  {path: 'offers', component: OfferListComponent},
  {path: 'offers/:id/edit', component: OfferEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ownerRoutes)],
  exports: [RouterModule]
})

export class OffersRoutingModule {
}
