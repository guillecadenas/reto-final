/**
 * @author Pedro Núñez
 */

import {Component, OnInit} from '@angular/core';
import {OfferService} from '../offer.service';
import {Offer} from '../offer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  errorMessage: string;
  offers: Offer[];

  constructor(private router: Router, private offerService: OfferService) {
  }

  ngOnInit() {
    this.offerService.getOffers().subscribe(
      offers => this.offers = offers,
      error => this.errorMessage = error as any);
  }

  // Detalles
  /*
  onSelect(offer: Offer) {
    this.router.navigate(['/offers', offer.id]);
  }
  */

  // Creación
  addOffer() {
    this.router.navigate(['/offers/add']);
  }

  // Eliminación
  editOffer(offer_id: number) {
    this.router.navigate(['/offers', offer_id, 'edit']);
  }

  // Eliminación
  deleteOffer(offer_id: number) {
    if (window.confirm("Are you sure you want to delete the selected offer?"))
    {
      console.log("Eliminando oferta con id #"+offer_id);
      this.offerService.deleteOffer(offer_id);
    }
  }
}
