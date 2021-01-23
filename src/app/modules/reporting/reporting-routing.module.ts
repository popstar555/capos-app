import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { SalesComponent } from './sales/sales.component';
import { StoreCreditComponent } from './store-credit/store-credit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sales'
  },
  {
    path: 'sales',
    component: SalesComponent,
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'store',
    component: StoreCreditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }
