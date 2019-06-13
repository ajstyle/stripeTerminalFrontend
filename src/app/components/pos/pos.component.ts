import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item, Order } from '../../item';
import { PosService } from '../../services/pos.service';
import { ApiService } from '../../services/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModifiersDialogComponent} from '../modifiers-dialog/modifiers-dialog.component';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {

  products = [];
  productTypes = ['Sea Food', 'Mexican Food' , 'Deals'];
  ticket: Item[];
  cartTotal = 0;
  cartNumItems = 0;
  items;

  constructor(private ticketSync: PosService, private db: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.ticketSync.currentTicket.subscribe(data => this.ticket = data  );
    this.ticketSync.currentTotal.subscribe(total => this.cartTotal = total);
    this.ticketSync.currentCartNum.subscribe(num => this.cartNumItems);
    this.products[0] = this.db.seeFood();
    this.products[1] = this.db.mexicanFood();
    this.products[2] = this.db.dealFood();

  }

  openDialog(item): void {
    const dialogRef = this.dialog.open(ModifiersDialogComponent, {
      width: '800px',
      height : '800px',
      data : item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }




  addToCheck(item: Item) {
    // If the item already exists, add 1 to quantity
    if (this.ticket.includes(item)) {
      this.ticket[this.ticket.indexOf(item)].Quantity += 1;
    } else {
      this.ticket.push(item);
    }
    console.log(this.ticket);
    this.calculateTotal();
  }

  // Calculate cart total
  calculateTotal() {
    let total = 0;
    let cartNum = 0;
    // Multiply item price by item quantity, add to total
    this.ticket.forEach((item: Item) => {
      total += (item.Price * item.Quantity);
      cartNum += item.Quantity;
    });
    this.cartTotal = total;
    this.cartNumItems = cartNum;
    this.ticketSync.updateNumItems(this.cartNumItems);
    this.ticketSync.updateTotal(this.cartTotal);
  }

  syncTicket() {
    this.ticketSync.changeTicket(this.ticket);
  }


}
