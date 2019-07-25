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
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { KdsComponent } from './components/kds/kds.component';
import { OrderComponent } from './components/order/order.component';
import {OrderNumberComponent} from './components/order-number/order-number.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component' ;
import {ResponsiveService} from './services/responsive.service' ;
import { NgxStripeModule } from 'ngx-stripe';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {StripeTerminalService} from './services/stripeTerminal.service' ;
import {FirebaseService} from './services/firebase.service' ;
@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    PosComponent,
    ModifiersDialogComponent,
    CheckoutComponent,
    OrderComponent,
    KdsComponent,
    OrderComponent,
    OrderNumberComponent,
    ThankyouComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'Taqueria Chavez' ),
 	  AngularFirestoreModule,
    AppRoutingModule,
    NgxStripeModule.forRoot('pk_test_cJM72ms6XPywuWC7mxBv7Lmm002j9ksdey'),
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,  
    MDBBootstrapModule.forRoot()
  ],
  providers: [ApiService, PosService, ResponsiveService, FirebaseService, StripeTerminalService],
  entryComponents : [ModifiersDialogComponent, CheckoutComponent, OrderComponent, OrderNumberComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
