import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CheckoutComponent} from '../checkout/checkout.component' ;
import { ApiService } from '../../services/api.service';
import {OrderObject} from '../../item' ;
import {PosService} from '../../services/pos.service'
@Component({
  selector: 'app-order-number',
  templateUrl: './order-number.component.html',
  styleUrls: ['./order-number.component.scss']
})
export class OrderNumberComponent implements OnInit {

  products ;
   orderObj: OrderObject = { orderNumber : 0 , order : [] , total: 0 } ;


  constructor(@Inject(MAT_DIALOG_DATA) public obj , public dialog: MatDialog, public dialogRef: MatDialogRef<OrderNumberComponent> ,
              private db: ApiService , private pos: PosService ) {
}

  ngOnInit() {
    this.products = this.db.seaFood();
  }

  close() {
    this.dialogRef.close();
  }

  checkout(orderNumber): void { 
    console.log(this.obj) ; 
    this.orderObj.orderNumber = orderNumber.orderNo ;
    this.orderObj.order = this.obj.name  ; 
    this.orderObj.total = this.obj.total ;
    const dialogRef = this.dialog.open(CheckoutComponent, {
      width: '1000px',
      height : '600px',
      panelClass: 'custom-dialog-container',
      data : this.orderObj
    });
    this.close() ;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
