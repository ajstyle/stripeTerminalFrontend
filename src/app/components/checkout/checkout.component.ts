import { Component, OnInit , Inject , ElementRef, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material';
import {KDS} from '../../item' ;
import {PosService} from '../../services/pos.service' ;
import {ApiService} from '../../services/api.service' ;
import {StripeTerminalService} from '../../services/stripeTerminal.service' ;

import Swal from 'sweetalert2';
import {FirebaseService} from '../../services/firebase.service' ;
import {Router} from '@angular/router' ;

const taxRate = 8.3125 ;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  paymentOption = ['Stripe-Terminal'] ;
 selectedPayment: string ;
 number =  1 ;
 disabledButton = true ;
 disable = false ;
 taxValue ;
 
 readerDisplay = {
  type: 'cart',
  cart: {
    line_items: [
      {
        description: 'Caramel latte',
        amount: 659,
        quantity: 1,
      },
      {
        description: 'Dozen donuts',
        amount: 1239,
        quantity: 1,
      },
    ],
    tax: 100,
    total: 1998,
    currency: 'usd',
  },
 };
//  showCashButton  = true  ;
 // showCardButton = false ;
paymentResponse: any ;
 index = [1] ;
 orderList: KDS[] = [];
 splitRow = [] ;
 showSpinner = false ;
 loadingText = '' ;
 terminalToken: any ;
 paymentIntent: any ;
  constructor(@Inject(MAT_DIALOG_DATA) public data ,
              public dialogRef: MatDialogRef<CheckoutComponent>,
              public pos: PosService,
              public router: Router,
              public apiService: ApiService ,
              public firebase: FirebaseService,
              public stripeTerminalService: StripeTerminalService
) {
  }
  selectedPaymentOption(event) {
console.log(event.value ) ;
this.selectedPayment = event.value ;
  }
  ngOnInit() {
    // console.log('orderListDataBefore===', this.orderList) ;
      this.taxValue = (this.data.total * taxRate) / 100 ;
      this.data.total = this.data.total + this.taxValue ;
      this.splitRow =  [{id :  1  , total : this.data.total }] ;
      this.pos.currentKds.subscribe(orderData => { this.orderList = orderData  ;

     } );



  }

  addNumber() {
    this.index.push(0) ;
    this.disabledButton = false ;
    this.number++ ;
    this.splitRow = this.splitRow.map( row   => {
      return  { id : this.number ,  total : this.data.total / this.number} ;

  });
  }




  charge() {
    this.showSpinner = true ;
    this.disable = true ;
    // document.getElementById('loadingText').innerHTML = ' Please wait Terminal Initialize' ;

    this.loadingText = 'Terminal Initialized' ;
    const terminal = (window as any).StripeTerminal.create({
      onFetchConnectionToken: fetchConnectionToken ,
      onUnexpectedReaderDisconnect: unexpectedDisconnect

    });
    console.log(terminal) ;
    this.discoverReaders(terminal);

  }
  async discoverReaders(terminal) {
    const config = {simulated: false};
    const discoverResult = await terminal.discoverReaders(config);
    if (discoverResult.error) {
      this.disable = false ;
      console.log('Failed to discover: ', discoverResult.error);
      this.swalErrorBox('Failed to discover' , '') ;
    } else if (discoverResult.discoveredReaders.length === 0) {
      console.log('No available readers.');
      this.disable = false ;
      this.swalErrorBox('No available readers.' , '') ;
      // element.innerHTML = 'No Reader Found' ;
      return false ;
    } else {
      // You should show the list of discoveredReaders to the
      // cashier here and let them select which to connect to (see below).
      this.connectReader(discoverResult, terminal) ;
    }



  }

  async  connectReader(discoverResult , terminal) {
    // Just select the first reader here.
    const selectedReader = discoverResult.discoveredReaders[0];

    const connectResult = await terminal.connectReader(selectedReader);
    if (connectResult.error) {
      this.disable = false ;
      console.log('Failed to connect:', connectResult.error);
      this.swalErrorBox('Failed to connect:' , connectResult.error ) ;

    } else {
      this.loadingText = 'Reader Connected';
      console.log('Connected to reader:', connectResult.reader.label);
      const data = {total : this.data.total} ;
      console.log(data);
      this.stripeTerminalService.getPaymentIntentSecret(data).subscribe(res => {
        this.loadingText = 'Waiting for a card...' ;
        this.paymentIntent = res ;
        const clientSecret  = this.paymentIntent.intent.client_secret ;
        terminal.collectPaymentMethod(clientSecret).then((result) => {
                  if (result.error) {
                    // Placeholder for handling result.error
                    this.disable = false ;
                    this.swalErrorBox('Card error:' , result.error ) ;

                    console.log(result.error);
                    return false ;
                  } else {
                    this.loadingText = 'Process Payment...' ;

                    terminal.processPayment(result.paymentIntent).then((result1) => {
                                if (result1.error) {
                                  // Placeholder for handling result.error
                                  this.disable = false ;
                                  this.swalErrorBox('Process Payment error:' , result.error ) ;

                                  return false ;
                                } else if (result1.paymentIntent) {
                                  this.stripeTerminalService.getStripePaymentCapture(result1.paymentIntent.id).subscribe( response => {
                                    console.log(response);
                                    this.loadingText = 'Payment Done' ;
                                    Swal.fire({
                                      title: 'Payment Done',
                                      type: 'success',
                                    }).then( result => {
                                      console.log(result);
                                      terminal.setReaderDisplay(this.readerDisplay);
                                      this.disable = false ;

                                      this.close();
                                    });

                                    this.showSpinner = false ;
                                  });
                                }
                              });
                  }

                }
        );
  }) ;
}}
    subtractNumber() {
    this.index.splice((this.index.length - 1 ) ,   1) ;
    this.number-- ;
    if ( this.number === 1 ) {
      this.disabledButton = true ;
    }
    this.splitRow = this.splitRow.map( row   => {
      return  { id : this.number ,  total : this.data.total / this.number} ;

  });
  }

  swalErrorBox(title , type) {
    Swal.fire({
      title ,
      type: 'error',
    }).then( result => {
      console.log(result);
      this.disable = false ;

      this.close();
    });

  }
    close() {
    this.dialogRef.close();
  }
    pay() {
  this.dialogRef.close();

 }
}


function fetchConnectionToken() {
  // Your backend should call /v1/terminal/connection_tokens and return the JSON response from Stripe
  return fetch(' https://restaurantsbackend.herokuapp.com/api/stripeTerminalGetToken', { method: 'GET' })
    .then(response => response.json())
    .then(data => {console.log(data.secretToken); return data.secretToken ;  });
}
function unexpectedDisconnect() {
    console.log('Error') ;
  }
