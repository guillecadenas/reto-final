import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Offer } from './offer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

<<<<<<< HEAD
  entityUrl = environment.REST_API_URL + 'offers'; //  http://localhost:9966/petclinic/api/offers
=======
  //entityUrl = environment.REST_API_URL + 'offers/'; //  http://localhost:9966/petclinic/api/offers
  entityUrl = "http://localhost:3000/offers";
>>>>>>> front_alberamon

  constructor(private httpClient: HttpClient) { }

  getOffers(){
    return this.httpClient.get<Offer[]>(this.entityUrl);
  }

  setOffers(offer: Offer){
    return this.httpClient.post<Offer>(this.entityUrl+'/addOffer', offer);
  }

  getOfferById(id: number){
    return this.httpClient.get<Offer>(`${this.entityUrl}/${id}`);
  }

  deleteOffer(id: number){
    return this.httpClient.delete(`${this.entityUrl}/${id}`);
  }
  
  updateOffer(offer: Offer){
    return this.httpClient.put<Offer>(`${this.entityUrl}/${offer.id}`, offer);
  }

  getValidOffers(){
    return this.httpClient.get<Offer[]>(`${this.entityUrl}/offersValid`);
  }


  
}
