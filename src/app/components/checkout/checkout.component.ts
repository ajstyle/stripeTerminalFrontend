import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material';
import {KDS} from '../../item' ;
import {PosService} from '../../services/pos.service' ;
import {Router} from '@angular/router' ;
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
 index = [1] ;
 orderList: KDS[] = [];
 splitRow = [{id :  1  , total : this.data.total }] ;
  constructor(@Inject(MAT_DIALOG_DATA) public data ,
              public dialogRef: MatDialogRef<CheckoutComponent>,
              public pos: PosService,
              public router: Router
) {
  }
  selectedPaymentOption(event) {
console.log(event.value ) ;
this.selectedPayment = event.value ;
  }
  ngOnInit() {
    // console.log('orderListDataBefore===', this.orderList) ;

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

  charge() {
    this.orderList.push(this.data) ;
    this.pos.updateKDS(this.orderList) ;


    console.log('payloadd====', this.orderList) ;


    this.dialogRef.close();

    this.router.navigate(['thankYou']) ;
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
