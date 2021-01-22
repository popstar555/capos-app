import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { AllComponent } from './all/all.component';
import { ProcessReturnComponent } from './process-return/process-return.component';
import { ContinueSaleComponent } from './continue-sale/continue-sale.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllComponent, ProcessReturnComponent, ContinueSaleComponent],
  imports: [
    CommonModule,
    FormsModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
