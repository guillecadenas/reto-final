import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Offer } from './offer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  entityUrl = environment.REST_API_URL + 'offers/'; //  http://localhost:9966/petclinic/api/offers

  constructor(private httpClient: HttpClient) { }

  getOffers(){
    return this.httpClient.get<Offer[]>(this.entityUrl);
  }
  setOffers(offer: Offer){
    return this.httpClient.post<Offer>(this.entityUrl, offer);
  }
  getOfferById(id: number){
    return this.httpClient.get<Offer>(`${this.entityUrl}/${id}`);
  }

  deleteOffer(id: number){
    return this.httpClient.delete<Offer>(`${this.entityUrl}/${id}`);
  }
  updateOffer(offer: Offer){
    return this.httpClient.put<Offer>(this.entityUrl, offer);
  }


  
}
