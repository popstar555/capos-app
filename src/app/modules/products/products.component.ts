import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  menuList=[
    {
      link: 'products',
      name: 'Products',
    },
    {
      link: 'stock',
      name: 'Stock Control',
    },
    {
      link: 'books',
      name: 'Product Books',
    },
    {
      link: 'types',
      name: 'Product Types',
    },
    {
      link: 'suppliers',
      name: 'Suppliers',
    },
    {
      link: 'brand',
      name: 'Brand',
    },
    {
      link: 'tags',
      name: 'Product Types',
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
