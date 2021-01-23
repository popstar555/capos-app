import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { ProductBooksComponent } from './product-books/product-books.component';
import { ProductTypesComponent } from './product-types/product-types.component';
import { ProductsComponent } from './products/products.component';
import { StockControlComponent } from './stock-control/stock-control.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'stock',
    component: StockControlComponent,
  },
  {
    path: 'books',
    component: ProductBooksComponent,
  },
  {
    path: 'types',
    component: ProductTypesComponent,
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
  },
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: 'tags',
    component: ProductTypesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
