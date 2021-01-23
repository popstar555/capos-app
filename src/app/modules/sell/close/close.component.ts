import { Component, OnInit } from '@angular/core';
import { IPaymentSummary } from '../../../models/payment-summary';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.scss']
})

export class CloseComponent implements OnInit {
  paymentData:IPaymentSummary[]=[
    {
      type: 'payment 1',
      expected: '-',
      counted: 0,
      differences: 0
    },
    {
      type: 'payment 2',
      expected: '-',
      counted: 0,
      differences: 0
    },
    {
      type: 'payment 3',
      expected: '-',
      counted: 0,
      differences: 0
    },
    {
      type: 'payment 4',
      expected: '-',
      counted: 0,
      differences: 0
    },
    {
      type: 'payment 5',
      expected: '-',
      counted: 0,
      differences: 0
    },
    // {
    //   type: 'payment 6',
    //   expected: '-',
    //   counted: 0,
    //   differences: 0
    // },
    // {
    //   type: 'payment 7',
    //   expected: '-',
    //   counted: 0,
    //   differences: 0
    // },
    // {
    //   type: 'payment 7',
    //   expected: '-',
    //   counted: 0,
    //   differences: 0
    // },
  ];

  outlet: string='data';
  register: string='data';
  closure: string='data';

  constructor() { }

  ngOnInit(): void {
  }

  calcTotal():string|number {
    //TODO: calculate total value.
    console.log('calculating total...');
    
    return '100.00';
  }

  registerSell(){
    //TODO: register sell
    console.log('register sell...');
  }
}


