import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { ReportingComponent } from 'src/app/modules/reporting/reporting.component';
import { SellComponent } from 'src/app/modules/sell/sell.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'sell',
    component: SellComponent,
    children: [
      {
        path: '',
        loadChildren: ()=>import('../../modules/sell/sell.module').then(m => m.SellModule)
      }
    ]
  },
  {
    path: 'ledger',
    loadChildren: () => import('../../modules/sales-ledger/sales-ledger.module').then(m => m.SalesLedgerModule)
  },
  {
    path: 'report',
    component: ReportingComponent,
    children: [
      {
        path: '',
        loadChildren: ()=>import('../../modules/reporting/reporting.module').then(m => m.ReportingModule)
      }
    ]
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        loadChildren: ()=>import('../../modules/products/products.module').then(m => m.ProductsModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
