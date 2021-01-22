import { NgModule } from '@angular/core';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { SellComponent } from 'src/app/modules/sell/sell.component';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/modules/home/home.module';
import { SalesLedgerModule } from 'src/app/modules/sales-ledger/sales-ledger.module';

@NgModule({
  declarations: [
    SellComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    HomeModule,
    SalesLedgerModule
  ],
  exports: [
    
  ]
})
export class AdminLayoutModule { }
