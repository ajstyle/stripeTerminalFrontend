// globals.ts
import { Injectable } from '@angular/core';
import { Observable  , Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';


const URL = 'http://localhost:8000/api' ;

@Injectable()
export class StripeTerminalService {
  constructor(private http: HttpClient) {
  }


  getStripeToken(data) {
   return this.http.post(`${URL}/stripePaymentCapture`, data ) ;
  }



}
