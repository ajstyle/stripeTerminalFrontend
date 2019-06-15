import { Component, OnInit } from '@angular/core';
import { Item , TicketModifier } from '../../item';
import { PosService } from '../../services/pos.service';
import { ApiService } from '../../services/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CheckoutComponent} from '../checkout/checkout.component' ;

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  ticket: Item[] = [];
  itemPrice  ;
  cartTotal = 0;
  cartNumItems = 0;
  ticketModifier: TicketModifier[] = [] ;
  disabledButton = true ;
  constructor(private ticketSync: PosService, public dialog: MatDialog, private db: ApiService) { }

  // Sync with ticketSync service on init
  ngOnInit() {
   // this.ticketSync.currentTicket.subscribe(data => this.ticket = data);
    this.ticketSync.currentTotal.subscribe(total => this.cartTotal = total);
    this.ticketSync.currentCartNum.subscribe(num => this.cartNumItems = num);
    this.ticketSync.currentTicketModifier.subscribe(data =>
      { this.ticketModifier = data ;
        console.log(this.ticketModifier);
        if(this.ticketModifier.length > 0 ) {
          this.disabledButton = false ;
        }
    }) ;
  }

  // Add item to ticket.
  addItem(item: Item) {
    // If the item already exists, add 1 to quantity
    if (this.ticketModifier.includes(item)) {
      this.ticketModifier[this.ticketModifier.indexOf(item)].Quantity += 1;
    } else {
      this.ticketModifier.push(item);
    }
    this.syncTicket();
    this.calculateTotal();
  }


  // Remove item from ticket
  removeItem(item: Item) {
    // Check if item is in array
    if (this.ticketModifier.includes(item)) {
      // Splice the element out of the array
      const index = this.ticketModifier.indexOf(item);
      if (index > -1) {
        // Set item quantity back to 1 (thus when readded, quantity isn't 0)
        this.ticketModifier[this.ticketModifier.indexOf(item)].Quantity = 1;
        this.ticketModifier.splice(index, 1);
        if(this.ticketModifier.length > 0 ) {
          this.disabledButton = false ;
        }else{
          this.disabledButton = true  ;
        }
      }
    }
    this.syncTicket();
    this.calculateTotal();
  }

  // Reduce quantity by one
  subtractOne(item: Item) {
    // Check if last item, if so, use remove method
    if (this.ticketModifier[this.ticketModifier.indexOf(item)].Quantity === 1) {
      this.removeItem(item);
    } else {
      this.ticketModifier[this.ticketModifier.indexOf(item)].Quantity = this.ticketModifier[this.ticketModifier.indexOf(item)].Quantity - 1;
    }
    this.syncTicket();
    this.calculateTotal();
  }

  // Calculate cart total
  calculateTotal() {
    let total = 0;
    let cartitems = 0;
    // Multiply item price by item quantity, add to total
    this.ticketModifier.forEach((item: Item) => {
      this.itemPrice  = item.Price * item.Quantity ;

      total += (item.Price * item.Quantity);
      cartitems += item.Quantity;
    });

    this.cartTotal = total;
    console.log('cartTotal',this.cartTotal);
    this.cartNumItems = cartitems;
    console.log('cartNumItems',this.cartNumItems);

    // Sync total with ticketSync service.
    this.ticketSync.updateNumItems(this.cartNumItems);
    this.ticketSync.updateTotal(this.cartTotal);
  }

  // Remove all items from cart
  clearCart() {
    // Reduce back to initial quantity (1 vs 0 for re-add)
    this.ticketModifier.forEach((item: Item) => {
      item.Quantity = 1;
    });
    // Empty local ticket variable then sync
    this.ticketModifier = [];
    this.syncTicket();
    this.calculateTotal();
  }

  checkout(item): void {
    const obj = { name : this.ticketModifier  , total : this.cartTotal   } ;

    
    const dialogRef = this.dialog.open(CheckoutComponent, {
      width: '600px',
      height : '600px',
      data : obj 
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  syncTicket() {
    this.ticketSync.ticketModifiers(this.ticketModifier);
  }

}