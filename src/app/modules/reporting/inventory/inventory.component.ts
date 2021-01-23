import { Component, OnInit } from '@angular/core';
import { IInventoryReport } from 'src/app/models/inventory-report';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  keyword:string = '';
  inventoryData:IInventoryReport[]=[
    {
      product: 'aaaa',
      outlet: 'to zzzz',
      currentStock: 123,
      stockValue: 33,
      itemValue: 2,
      reorderPoint: 23,
      reorderAmount: 65
    },
    {
      product: 'bbb',
      outlet: 'to yyy',
      currentStock: 123,
      stockValue: 33,
      itemValue: 2,
      reorderPoint: 23,
      reorderAmount: 65
    },
    {
      product: 'cccc',
      outlet: 'to xxxx',
      currentStock: 123,
      stockValue: 33,
      itemValue: 2,
      reorderPoint: 23,
      reorderAmount: 65
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

  toExcel(){
    //TODO: export to excel
  }

  search(){
    //TODO: search inventory reports
  }
}
