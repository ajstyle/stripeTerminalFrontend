import { Component, OnInit , Inject } from '@angular/core';
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
  paymentOption = ['Cash' , 'Credit Card' , 'Debit Card'] ;
 selectedPayment: string ;
 number =  1 ;
 disabledButton = true ;
 taxValue ;
 showCashButton  = true  ;
 showCardButton = false ;
 loading: string ;
paymentResponse: any ;
 index = [1] ;
 orderList: KDS[] = [];
 splitRow = [] ;
 showSpinner = false ;
 terminalToken: any ;
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

    // console.log('Checkoutdata===', this.data) ;
    // console.log('orderListDataafter===', this.orderList) ;

  }

  addNumber() {
    this.index.push(0) ;
    this.disabledButton = false ;
    this.number++ ;
    this.splitRow = this.splitRow.map( row   => {
      return  { id : this.number ,  total : this.data.total / this.number} ;

  });
  }

  // openCheckout(splitAmount) {
  //   this.showSpinner = true ;

  //   const handler = (window as any).StripeCheckout.configure({
  //     key: 'pk_test_cJM72ms6XPywuWC7mxBv7Lmm002j9ksdey',
  //     locale: 'auto',
  //     currency : 'USD',
  //     token:  (token: any) => {
  //       this.apiService.paymentStripe(token.id , this.data).subscribe(res => {
  //         this.paymentResponse = res ;
  //         console.log(this.paymentResponse);
  //         if (this.paymentResponse.success) {

  //           Swal.fire({
  //             title: 'Payment Done',
  //             type: 'success',

  //           }).then((result) => {
  //             this.showSpinner = false ;

  //             this.index.splice((this.index.length - 1 ) ,   1) ;
  //             console.log('length====' , this.index.length) ;
  //             if (this.index.length === 0 ) {
  //                 this.charge() ;
  //                 }

  //             }
  //           ) ;
  //       }
  //       }, (err => {
  //         console.log('error=====', err.error);
  //         Swal.fire({
  //           text: err.error.message ,
  //           type: 'error',
  //         }).then((result) => {
  //           if (result.value) {
  //             this.dialogRef.close();
  //             this.router.navigate(['/']);
  //          }
  //           }
  //         ) ;
  //       }));
  //       // You can access the token ID with `token.id`.
  //       // Get the token ID to your server-side code for use.
  //       console.log(token);
  //     }
  //   });
  //   console.log('===total' , this.data) ;
  //   handler.open({
  //     name: this.data.name ,
  //     description: 'Checkout',
  //     amount : splitAmount * 100
  //   });

  // }



  paymentChange(event) {
    if (event.target.value === 'Cash') {
      this.showCashButton = true ;
      this.showCardButton = false ;

    } else {
      this.showCardButton = true ;
      this.showCashButton = false ;

    }
  }


  // charge() {
  //   console.log(this.pos.order) ;
  //   this.firebase.createKDSOrder(this.data).then( x => {console.log('x====', x); }  );

  //   this.orderList.push(this.data) ;
  //   this.pos.updateKDS(this.orderList) ;

  //   console.log(this.pos.order) ;
  //   console.log('payloadd====', this.orderList) ;

  //   this.pos.order = this.data ;
  //   console.log('posOrder===', this.pos.order);
  //   this.dialogRef.close();

  //   this.router.navigate(['thankYou']) ;
  // }

  // cashCharge() {
  //   console.log(this.pos.order) ;
  //   this.firebase.createKDSOrder(this.data).then( x => {console.log('x====', x); }  );
  //   this.orderList.push(this.data) ;
  //   this.pos.updateKDS(this.orderList) ;


  //   this.pos.order = this.data ;

  //   this.index.splice((this.index.length - 1 ) ,   1) ;
  //   console.log('length====' , this.index.length) ;
  //   if (this.index.length === 0 ) {
  //     this.router.navigate(['thankYou']) ;
  //     this.dialogRef.close();

  //   }
  // }


  charge() {
    const terminal = (window as any).StripeTerminal.create({
      onFetchConnectionToken: fetchConnectionToken ,
      onUnexpectedReaderDisconnect: unexpectedDisconnect

    });
    console.log(terminal) ;

    discoverReaders(terminal) ;
  }


    connectReaderHandler(terminal) {
    const config = {simulated: true};
    terminal.discoverReaders(config).then((discoverResult) => {
      if (discoverResult.error) {
        console.log('Failed to discover: ', discoverResult.error);
      } else if (discoverResult.discoveredReaders.length === 0) {
        console.log('No available readers.');
      } else {
        // Just select the first reader here.
        const selectedReader = discoverResult.discoveredReaders[0];

        terminal.connectReader(selectedReader).then((connectResult)  => {
          if (connectResult.error) {
            console.log('Failed to connect: ', connectResult.error);
          } else {
            console.log('Connected to reader: ', connectResult.reader.label);
          }
        });
      }
    });
  }

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

async function discoverReaders(terminal) {
    const config = {simulated: false};
    const discoverResult = await terminal.discoverReaders(config);
    if (discoverResult.error) {
      console.log('Failed to discover: ', discoverResult.error);
    } else if (discoverResult.discoveredReaders.length === 0) {
      console.log('No available readers.');
    } else {
      // You should show the list of discoveredReaders to the
      // cashier here and let them select which to connect to (see below).
      connectReader(discoverResult, terminal);
    }
  }
async function connectReader(discoverResult , terminal) {
    // Just select the first reader here.
    const selectedReader = discoverResult.discoveredReaders[0];

    const connectResult = await terminal.connectReader(selectedReader);
    if (connectResult.error) {
      console.log('Failed to connect:', connectResult.error);
    } else {
      console.log('Connected to reader:', connectResult.reader.label);
    }
  }

