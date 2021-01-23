import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-control',
  templateUrl: './stock-control.component.html',
  styleUrls: ['./stock-control.component.scss']
})
export class StockControlComponent implements OnInit {

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
