import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item, KDS } from '../item';
import { TicketModifier } from '../item';

@Injectable()
export class PosService {

  private ticket = TICKET ;
  private tickerModifier = TICKETModifier ;
  private kds = KDS ;
  private ticketModifierSource = new BehaviorSubject<TicketModifier[]>(this.tickerModifier);

  private kdsModifierSource = new BehaviorSubject<KDS[]>(this.kds);

  private ticketSource = new BehaviorSubject<Item[]>(this.ticket);

  private cartTotal = 0;
  private cartTotalSource = new BehaviorSubject<number>(this.cartTotal);

  private cartNumItems = 0;
  private cartNumSource = new BehaviorSubject<number>(this.cartNumItems);



  currentTicket = this.ticketSource.asObservable();
  currentTicketModifier = this.ticketModifierSource.asObservable();
  currentTotal = this.cartTotalSource.asObservable();
  currentCartNum = this.cartNumSource.asObservable();
  currentKds = this.kdsModifierSource.asObservable() ;
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

  updateKDS(orders: KDS[]) {
    console.log('OrderService,' , orders) ;
    
    this.kdsModifierSource.next(orders) ;
  }
}

// Demo content
const TICKET: Item[] = [
];

const TICKETModifier: TicketModifier[] = [] ;
const KDS: KDS[] = [] ;
