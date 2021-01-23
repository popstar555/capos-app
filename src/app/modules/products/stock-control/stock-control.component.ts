import { Component, OnInit } from '@angular/core';
import { IStock } from 'src/app/models/stock';

@Component({
  selector: 'app-stock-control',
  templateUrl: './stock-control.component.html',
  styleUrls: ['./stock-control.component.scss']
})
export class StockControlComponent implements OnInit {
  keyword:string = '';
  stockData:IStock[] = [
// {
//   name: string;
//   type: string;
//   deliveryDue: string;
//   number: number;
//   outlet: number;
//   source: string;
//   status: string;
//   items: string;
//   totalCost: number;
// }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  inventoryCount(){
    //TODO: inventory count...
    
  }

  returnStock(){
    //TODO: return stock

  }

  orderStock(){
    //TODO: order stock
  }
}
