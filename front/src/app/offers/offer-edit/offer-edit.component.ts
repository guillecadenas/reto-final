import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { Offer } from '../offer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css']
})
export class OfferEditComponent implements OnInit {

  offer: Offer;

  constructor(private offerService: OfferService,
              private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.offer.id = this.ruta.snapshot.params.id;
    this.offerService.getOfferById(this.offer.id).subscribe(
      resp => {
        this.offer = resp;
      }
    );
  }

  onSubmit(Offer){
    console.log(this.offer);
    this.offerService.updateOffer(Offer).subscribe(
      data => {
        this.offer = data, console.log(data);
      }
    );
  }

}
