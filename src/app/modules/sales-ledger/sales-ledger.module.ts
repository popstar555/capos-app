import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesLedgerRoutingModule } from './sales-ledger-routing.module';
import { SalesLedgerComponent } from './sales-ledger.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SalesLedgerComponent],
  imports: [
    CommonModule,
    FormsModule,
    SalesLedgerRoutingModule
  ]
})
export class SalesLedgerModule { }
