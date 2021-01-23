import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  brand:string = '';
  supplier: string = '';
  tags: string = '';

  productData:IProduct[]=[
    {
      name: 'Product 1',
      image: 'image url',
      created: '2020-09-21',
      tags: 'aa bbb',
      brand: 'XXXX 2',
      variants: 'aaaa',
      price: 234.5,
      action: 'ok'
    },
    {
      name: 'Product 1',
      image: 'image url',
      created: '2020-09-21',
      tags: 'aa bbb',
      brand: 'XXXX 2',
      variants: 'aaaa',
      price: 234.5,
      action: 'ok'
    },
    {
      name: 'Product 1',
      image: 'image url',
      created: '2020-09-21',
      tags: 'aa bbb',
      brand: 'XXXX 2',
      variants: 'aaaa',
      price: 234.5,
      action: 'ok'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    //TODO: add product

  }

  importData(){
    //TODO: import product data from file

  }

  exportData(){
    //TODO: export product data to file

  }
}
