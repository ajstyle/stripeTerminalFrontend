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
  ngOnInit() {
   const today = new Date();

   this.date = today.getDate() +  '-' + (today.getMonth() + 1) + '-' + today.getFullYear() ;

   this.pos.currentKds.subscribe(res => {
      this.orderArray = res ;
      console.log('kds====' , this.orderArray) ;
    });
  }

}
