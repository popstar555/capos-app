import { NgModule } from '@angular/core';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { SellComponent } from 'src/app/modules/sell/sell.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SellComponent,

  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,

  ],
  exports: [
    
  ]
})
export class AdminLayoutModule { }
