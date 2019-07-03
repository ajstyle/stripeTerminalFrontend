import { Component, OnInit } from '@angular/core';
import { PosService} from '../../services/pos.service' ; 
import {KDS} from '../../item'
@Component({
  selector: 'app-kds',
  templateUrl: './kds.component.html',
  styleUrls: ['./kds.component.scss']
})
export class KdsComponent implements OnInit {

  constructor(private pos: PosService) { }
  kdsArray: KDS[] = [] ;
  
  ngOnInit() {

      this.pos.currentKds.subscribe(res => {
        this.kdsArray = res ;
        console.log('kds====' , this.kdsArray) ;
      });
  }

}
