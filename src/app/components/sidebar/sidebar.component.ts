import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuList=[
    {
      name: 'Sell',
      icon: 'sell',
      link: '/sell'
    },
    {
      name: 'Sales Ledger',
      icon: 'sales-ledger',
      link: '/ledger'
    },
    {
      name: 'Reporting',
      icon: 'reporting',
      link: '/report'
    },
    {
      name: 'Products',
      icon: 'products',
      link: '/products'
    },
    {
      name: 'Customers',
      icon: 'customers',
      link: '/customers'
    },
    {
      name: 'Stock Control',
      icon: 'stock-control',
      link: '/stock'
    },
    {
      name: 'Employees',
      icon: 'employees',
      link: '/employees'
    },
    {
      name: 'Ecommerce',
      icon: 'ecommerce',
      link: '/ecommerce'
    },
    {
      name: 'Select Plan',
      icon: 'select-plan',
      link: '/plan'
    },
    {
      name: 'Setup',
      icon: 'setup',
      link: '/setup'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
