import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { Offer } from '../offer';

@Component({
  selector: 'app-offer-valid',
  templateUrl: './offer-valid.component.html',
  styleUrls: ['./offer-valid.component.css']
})
export class OfferValidComponent implements OnInit {

  offers: Offer[];

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.offerService.getValidOffers().subscribe(
      resp => { this.offers = resp }
    );
  }

}
