import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../item';
import { TicketModifier } from '../item';

@Injectable()
export class PosService {

  private ticket = TICKET ;
  private tickerModifier = TICKETModifier ;
  private ticketModifierSource = new BehaviorSubject<TicketModifier[]>(this.tickerModifier);

  private ticketSource = new BehaviorSubject<Item[]>(this.ticket);

  private cartTotal = 0;
  private cartTotalSource = new BehaviorSubject<number>(this.cartTotal);

  private cartNumItems = 0;
  private cartNumSource = new BehaviorSubject<number>(this.cartNumItems);



  currentTicket = this.ticketSource.asObservable();
  currentTicketModifier = this.ticketModifierSource.asObservable();
  currentTotal = this.cartTotalSource.asObservable();
  currentCartNum = this.cartNumSource.asObservable();
  constructor() { }

  changeTicket(ticket: Item[]) {
    this.ticketSource.next(ticket);
  }

  updateTotal(total: number) {
    this.cartTotalSource.next(total);
  }

  updateNumItems(num: number) {
    this.cartNumSource.next(num);
  }

  ticketModifiers(ticket: TicketModifier[]) {
    this.ticketModifierSource.next(ticket) ;
  }
}

// Demo content
const TICKET: Item[] = [
];

const TICKETModifier: TicketModifier[] = [] ;
