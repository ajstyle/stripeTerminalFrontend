import { Component, OnInit } from '@angular/core';
import { PosService} from '../../services/pos.service' ;
import { FirebaseService} from '../../services/firebase.service' ;

import {KDS} from '../../item';
@Component({
  selector: 'app-kds',
  templateUrl: './kds.component.html',
  styleUrls: ['./kds.component.scss']
})
export class KdsComponent implements OnInit {

  constructor(private pos: PosService , public firebase: FirebaseService ) { }
  kdsArray: KDS[] = [] ;

  ngOnInit() {

      // this.pos.currentKds.subscribe(res => {
      //   this.kdsArray = res ;
      //   console.log('kds====' , this.kdsArray) ;
      // });

      this.firebase.getKDSOrder().subscribe(data => {

        this.kdsArray = data.map(e => {
          return {
            ...e.payload.doc.data()
          } as KDS;
        });
      });
      setTimeout(x => {
        console.log(this.kdsArray);
      }, 4000);
  }

}
