import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { Router } from '@angular/router';
import { Offer } from '../offer';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.css']
})
export class OfferAddComponent implements OnInit {

  offer: Offer = {
    id: null,
    title: '',
    description: '',
    discount: null,
    expirationDate: null
  };

  constructor(private offerService: OfferService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(Offer){
    if(Offer.invalid){
      return;
    }
    let fecha =  new Date(this.offer.expirationDate);
    let fechaString = fecha.getFullYear() + '/' + fecha.getMonth() + '/' + fecha.getDay();
    this.offer.expirationDate = fechaString;
    this.offerService.setOffers(this.offer).subscribe(
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
