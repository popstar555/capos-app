import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { StoreCreditComponent } from './store-credit/store-credit.component';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';


@NgModule({
  declarations: [SalesComponent, InventoryComponent, PaymentComponent, RegisterComponent, StoreCreditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReportingRoutingModule,
    DpDatePickerModule
  ]
})
export class ReportingModule { }
