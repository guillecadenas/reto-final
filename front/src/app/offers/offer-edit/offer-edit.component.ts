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

  offer: Offer;

  constructor(private offerService: OfferService,
              private ruta: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.offer.id = this.ruta.snapshot.params.id;
    this.offerService.getOfferById(this.offer.id).subscribe(
      resp => {
        this.offer = resp;
      }
    );
  }

  onSubmit(Offer){
    if(Offer.invalid){
      return;
    }
    console.log(this.offer);
    this.offerService.updateOffer(this.offer).subscribe(
      data => {
        this.offer = data, console.log(data);
      }
    );
    this.gotoOfferList();
  }

  gotoOfferList(){
    this.router.navigate(['/offers']);
  }

}
