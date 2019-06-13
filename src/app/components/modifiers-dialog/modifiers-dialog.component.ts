import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material';
import { PosService } from '../../services/pos.service';
import { ApiService } from '../../services/api.service';
import { Item, Order } from '../../item';

@Component({
  selector: 'app-modifiers-dialog',
  templateUrl: './modifiers-dialog.component.html',
  styleUrls: ['./modifiers-dialog.component.scss']
})
export class ModifiersDialogComponent implements OnInit {

  cartTotal = 0;
  cartNumItems = 0;
  ticket: Item[];
  ticketModifier: Item[];
  modifier = [];
  flag = true;
  selectedOptions: Array<any> = [];
  currentSelected: string;
  totalAmount = 0;
  total = 0;
  step = 0;
  show = true;


  constructor(@Inject(MAT_DIALOG_DATA) public data: Item, 
              public dialogRef: MatDialogRef<ModifiersDialogComponent>,
              private ticketSync: PosService, private db: ApiService) {
  }

  ngOnInit() {
    console.log(this.data);
    this.ticketSync.currentTicket.subscribe(data => this.ticket = data);
    this.ticketSync.currentTotal.subscribe(total => this.cartTotal = total);
    this.ticketSync.currentCartNum.subscribe(num => this.cartNumItems);
    this.ticketSync.currentTicketModifier.subscribe(data => this.ticketModifier = data);
    this.defaultItem();
    console.log(this.selectedOptions);
    this.totalAfterAddModifier();
  }

  close() {
    this.dialogRef.close();
  }
  totalAfterAddModifier() {
    const totalRs = this.selectedOptions.reduce((accumulator, currentValue) => {
      console.log(accumulator + currentValue.Price);
      return accumulator + currentValue.Price;
    }, 0);
    console.log('total===', this.total);
    this.totalAmount = this.data.Price + totalRs;
    console.log(this.totalAmount);
  }

  defaultItem() {
    console.log(this.data.Modifiers);
    // tslint:disable-next-line:forin
    for (const key in this.data.Modifiers) {
      this.data.Modifiers[key].map(x => {
        console.log(x);
        if (x.Default) {
          this.selectedOptions.push(x);
        }
      });
    }
  }

  toggle() {
    this.show = !this.show;
  }

  onSelection(e, v) {
    this.currentSelected = e.option.value;
    if (this.selectedOptions.includes(e.option.value)) {
      this.selectedOptions.splice(this.selectedOptions.indexOf(e.option.value), 1);
      this.totalAfterAddModifier();
    } else {
      if (e.option.selected) {
        this.selectedOptions.push(e.option.value);
        this.totalAfterAddModifier();
      }
    }
  }
  setStep(index: number) {
    this.step = index;
  }
  // save(meat) {
  //   console.log(meat.selectedOptions.selected);
  // }
  // addExtraItem(item) {
  //   console.log(this.ticket.length);
  //   if (this.ticket.length !== 0) {
  //     if (this.ticket[0].selectedModifier.includes(item)) {
  //       this.flag = true;
  //     } else {
  //       this.flag = false;
  //     }
  //   }
  //   item.Quantity++;
  //   this.modifier.push(item);

  // }






  addModifier() {
    const obj = JSON.parse(JSON.stringify(this.data));
    obj.Price = this.totalAmount;
    obj.selectedModifier = this.selectedOptions;
    obj.Quantity = 1;
    this.ticketModifier.push(obj);
    this.calculateTotal();
    this.ticketSync.ticketModifiers(this.ticketModifier);
  }
  calculateTotal() {
    let total = 0;
    let cartNum = 0;
    console.log('caluculate', this.ticket);
    this.ticketModifier.forEach((item: Item) => {
      console.log('selectedModifer;', item);
      total += (item.Price * item.Quantity);
      cartNum += item.Quantity;
    });

    this.cartTotal = total;
    this.cartNumItems = cartNum;
    console.log('cartNumItems', this.cartNumItems);
    this.ticketSync.updateNumItems(this.cartNumItems);
    this.ticketSync.updateTotal(this.cartTotal);
    this.dialogRef.close();
  }
  // addToCheck(item: Item) {
  //   // If the item already exists, add 1 to quantity
  //   console.log(item);
  //   if (this.ticket.includes(item)) {
  //     this.ticket[this.ticket.indexOf(item)].Quantity += 1;
  //   } else {
  //     item.selectedModifier = this.modifier;
  //     item.Quantity = 1;
  //     this.ticket.push(item);

  //     console.log(this.ticket);
  //   }

  //  // this.calculateTotal(item);

  // }


  // // Calculate cart total
  // calculateTotal(cartItem) {
  //   let total = 0;
  //   let cartNum = 0;
  //   this.ticket.forEach((item: Item) => {
  //     console.log('selectedModifer;', item);
  //     total += (item.Price * item.Quantity);

  //     if (item.selectedModifier.length !== 0) {
  //       item.selectedModifier.forEach(modifier => {

  //         total += modifier.Price * modifier.Quantity;
  //         console.log(total);
  //       });
  //     }

  //     cartNum += item.Quantity;

  //   });



  //   this.cartTotal = total;
  //   console.log('cartTotal', this.cartTotal);
  //   this.cartNumItems = cartNum;
  //   console.log('cartNumItems', this.cartNumItems);

  //   this.ticketSync.updateNumItems(this.cartNumItems);
  //   this.ticketSync.updateTotal(this.cartTotal);

  // }
}

