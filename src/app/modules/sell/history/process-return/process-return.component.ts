import { Component, OnInit } from '@angular/core';
import { ISaleItem } from 'src/app/models/sale-item';

@Component({
  selector: 'app-process-return',
  templateUrl: './process-return.component.html',
  styleUrls: ['./process-return.component.scss']
})
export class ProcessReturnComponent implements OnInit {
  status: string = '';
  customers: string = '';

  saleData:ISaleItem[]=[
    {
      receipt: 'Receipt 01',
      customer: 'ttt',
      soldBy: 'ssss',
      note: 'sososososos',
      soldTotal: 4.5,
      status: 'active'
    },
    {
      receipt: 'Receipt 01',
      customer: 'ttt',
      soldBy: 'ssss',
      note: 'sososososos',
      soldTotal: 4.5,
      status: 'active'
    },
    {
      receipt: 'Receipt 01',
      customer: 'ttt',
      soldBy: 'ssss',
      note: 'sososososos',
      soldTotal: 4.5,
      status: 'active'
    },
    {
      receipt: 'Receipt 01',
      customer: 'ttt',
      soldBy: 'ssss',
      note: 'sososososos',
      soldTotal: 4.5,
      status: 'active'
    },
    {
      receipt: 'Receipt 01',
      customer: 'ttt',
      soldBy: 'ssss',
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
