import { Component, OnInit } from '@angular/core';
import { ISaleItem } from '../../../../models/sale-item';

@Component({
  selector: 'app-continue-sale',
  templateUrl: './continue-sale.component.html',
  styleUrls: ['./continue-sale.component.scss']
})
export class ContinueSaleComponent implements OnInit {
  status: string = '';
  customers: string = '';

  saleData:ISaleItem[]=[
    {
      receipt: 'Receipt 01',
      customer: 'xxxx',
      soldBy: 'yyy',
      note: 'sososososos',
      soldTotal: 4.5,
      status: 'active'
    },
    {
      receipt: 'Receipt 01',
      customer: 'xxxx',
      soldBy: 'yyy',
      note: 'sososososos',
      soldTotal: 4.5,
      status: 'active'
    },
    {
      receipt: 'Receipt 01',
      customer: 'xxxx',
      soldBy: 'yyy',
      note: 'sososososos',
      soldTotal: 4.5,
      status: 'active'
    },
    {
      receipt: 'Receipt 01',
      customer: 'xxxx',
      soldBy: 'yyy',
      note: 'sososososos',
      soldTotal: 4.5,
      status: 'active'
    },
    {
      receipt: 'Receipt 01',
      customer: 'xxxx',
      soldBy: 'yyy',
      note: 'sososososos',
      soldTotal: 4.5,
      status: 'active'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    if(this.status!=='' || this.customers!==''){
      //TODO: search sales
      console.log(this.status, this.customers);
    }
  }

}
