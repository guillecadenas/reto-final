import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { Offer } from '../offer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css']
})
export class OfferEditComponent implements OnInit {

  offer: Offer = null;
  id: number;

  constructor(private offerService: OfferService,
              private ruta: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.ruta.snapshot.params.id;
    this.offerService.getOfferById(this.id).subscribe(
      resp => {
        this.offer = resp;

        let fecha =  new Date(this.offer.expirationDate);
        let fechaString = fecha.getFullYear() + '/' + fecha.getMonth() + '/' + fecha.getDay();
        this.offer.expirationDate = fechaString;
      }
    );
  }

  onSubmit(Offer){
    if(Offer.invalid){
      return;
    }
    let fecha =  new Date(this.offer.expirationDate);
    let fechaString = fecha.getFullYear() + '/' + fecha.getMonth() + '/' + fecha.getDay();
    this.offer.expirationDate = fechaString;
    this.offerService.updateOffer(this.offer).subscribe(
      data => {
        this.offer = data;
      }
    );
    this.gotoOfferList();
  }

  gotoOfferList(){
    this.router.navigate(['/offers']);
  }

}
