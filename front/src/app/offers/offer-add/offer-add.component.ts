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

  offer: Offer;

  constructor(private offerService: OfferService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(Offer){
    this.offerService.setOffers(Offer).subscribe(
      data => {
        this.offer = data, console.log(data);
      }
    );

  }

  gotoOfferList(){
    this.router.navigate(['/offers']);
  }


}
