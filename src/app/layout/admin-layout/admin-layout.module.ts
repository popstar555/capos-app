import { NgModule } from '@angular/core';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { SellComponent } from 'src/app/modules/sell/sell.component';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/modules/home/home.module';
import { SalesLedgerModule } from 'src/app/modules/sales-ledger/sales-ledger.module';
import { ReportingModule } from 'src/app/modules/reporting/reporting.module';
import { ReportingComponent } from 'src/app/modules/reporting/reporting.component';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { ProductsModule } from 'src/app/modules/products/products.module';

@NgModule({
  declarations: [
    SellComponent,
    ReportingComponent,
    ProductsComponent,

  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    HomeModule,
    SalesLedgerModule,
    ReportingModule,
    ProductsModule
  ],
  exports: [
    
  ]
})
export class AdminLayoutModule { }
