import { Component, OnInit } from '@angular/core';
import { PosService } from '../../services/pos.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {
  orderArray = [] ;
  constructor(public pos: PosService) { }
  date: any ;
  orderList: any ;
  orderNumber: number ;
  total: number ;
  ngOnInit() {
   const today = new Date();

   this.date = today.getDate() +  '-' + (today.getMonth() + 1) + '-' + today.getFullYear() ;

   this.orderList  = this.pos.order ;
   console.log(this.orderList) ;
   if (this.orderList) {
    this.orderNumber = this.orderList.orderNumber ;
    this.total = this.orderList.total ;
    }
  }

}
