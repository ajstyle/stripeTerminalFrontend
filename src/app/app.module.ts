import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {TicketComponent} from './components/ticket/ticket.component' ;
import {PosComponent} from './components/pos/pos.component' ;
import {ApiService} from './services/api.service' ;
import {PosService} from './services/pos.service';
import { ModifiersDialogComponent } from './components/modifiers-dialog/modifiers-dialog.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SplitAmountComponent } from './split-amount/split-amount.component' ;
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    PosComponent,
    ModifiersDialogComponent,
    CheckoutComponent,
    SplitAmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [ApiService, PosService],
  entryComponents : [ModifiersDialogComponent, CheckoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
