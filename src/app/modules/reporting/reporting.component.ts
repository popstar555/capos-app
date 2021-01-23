import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit {
  menuList=[
    {
      name: 'Sales Reports',
      link: 'sales'
    },
    {
      name: 'Inventory Reports',
      link: 'inventory'
    },
    {
      name: 'Payment Reports',
      link: 'payment'
    },
    {
      name: 'Register Closure',
      link: 'register'
    },
    {
      name: 'Store Credit',
      link: 'store'
    }    
    
  ];
  position="50";
  menuTitle="Main Register";

  constructor() { }

  ngOnInit(): void {
  }

}
