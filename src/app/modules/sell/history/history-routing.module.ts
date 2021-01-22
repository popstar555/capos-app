import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { ContinueSaleComponent } from './continue-sale/continue-sale.component';
import { ProcessReturnComponent } from './process-return/process-return.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'all'
  },
  {
    path: 'all',
    component: AllComponent,
  },
  {
    path: 'return',
    component: ProcessReturnComponent
  },
  {
    path: 'sale',
    component: ContinueSaleComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
