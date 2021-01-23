import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  menuList=[
    {
      name: 'Sell',
      link: 'main'
    },
    {
      name: 'Open/Close',
      link: 'open'
    },
    {
      name: 'Sales History',
      link: 'history'
    },
    {
      name: 'Cash Management',
      link: 'cash'
    }    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
