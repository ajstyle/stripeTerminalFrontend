// globals.ts
import { Injectable } from '@angular/core';
import { Observable  , Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';

const URL = 'https://restaurantsbackend.herokuapp.com/api' ;

@Injectable()
export class StripeTerminalService {
  constructor(private http: HttpClient) {
  }


  getStripeToken(data) {
   return this.http.post(`${URL}/stripePaymentCapture`, data ) ;
  }


 getPaymentIntentSecret(data) {
    // Your backend should call /v1/terminal/connection_tokens and return the JSON response from Stripe
  return   this.http.post(`${URL}/stripePaymentIntent`  , data)  ;
  }

  getStripePaymentCapture(paymentId) {
    return   this.http.get(`${URL}/stripePaymentCapture/${paymentId}` )  ;

  }
}


