import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KdsComponent} from '../app/components/kds/kds.component' ;
import {OrderComponent} from '../app/components/order/order.component' ;
import {ThankyouComponent} from '../app/components/thankyou/thankyou.component' ;
import {StripeComponent} from './components/stripe/stripe.component' ;
const routes: Routes = [
  {
    path : '' ,
    redirectTo : 'order',
    pathMatch :  'full'
  },
  {
  path : 'kds' ,
  component : KdsComponent
} , {
  path : 'order' ,
  component : OrderComponent

},  {
  path : 'thankYou' ,
  component : ThankyouComponent
}, {
  path : 'stripe' ,
  component : StripeComponent

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
