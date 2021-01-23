import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { StockControlComponent } from './stock-control/stock-control.component';
import { ProductBooksComponent } from './product-books/product-books.component';
import { ProductTypesComponent } from './product-types/product-types.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { BrandComponent } from './brand/brand.component';
import { ProductTagsComponent } from './product-tags/product-tags.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent, 
    StockControlComponent, 
    ProductBooksComponent, 
    ProductTypesComponent, 
    SuppliersComponent, 
    BrandComponent, 
    ProductTagsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
