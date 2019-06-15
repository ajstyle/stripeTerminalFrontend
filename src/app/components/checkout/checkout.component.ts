import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material';
import {TicketModifier} from '../../item' ;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  paymentOption = ['Cash' , 'Manual Card Entry' , 'User Points'] ;
 selectedPayment : string ; 
  constructor(@Inject(MAT_DIALOG_DATA) public data: TicketModifier ,
              public dialogRef: MatDialogRef<CheckoutComponent>,
) {
  }

  selectedPaymentOption(event) {
console.log(event.value ) ;
this.selectedPayment = event.value ;
  }
  ngOnInit() {
    console.log(this.data) ; 
  }

  close() {
    this.dialogRef.close();
  }
 pay() {
  this.dialogRef.close();

 }
}
