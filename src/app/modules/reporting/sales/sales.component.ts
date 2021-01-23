import { Component, OnInit } from '@angular/core';
import { ISalesReport } from 'src/app/models/sales-report';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  startDate: string = '';
  endDate: string = '';

  salesData:ISalesReport[] = [
    {
      date: '04/21',
      totals: 120,
      revenue: 20,
      costOfGoods: 100,
      grossProfit: 123,
      margin: 3,
      tax: 2,
    },
    {
      date: '04/22',
      totals: 120,
      revenue: 20,
      costOfGoods: 100,
      grossProfit: 123,
      margin: 3,
      tax: 2,
    },
    {
      date: '04/23',
      totals: 120,
      revenue: 20,
      costOfGoods: 100,
      grossProfit: 123,
      margin: 3,
      tax: 2,
    },
  ];

  tatalRevenue:number     = 0;
  totalCostOfGoods:number = 0;
  totalGrossProfit:number = 0;
  totalMargin:number      = 0;
  totalTax:number         = 0;
  
  cfgDatePicker1={
    format: "YYYY-MM-DD",
  };
  cfgDatePicker2={
    format: "YYYY-MM-DD",
  };

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    //TODO: search sales reports and update this.salesData
    console.log('search from', this.startDate, ' to ', this.endDate);
  }
}
