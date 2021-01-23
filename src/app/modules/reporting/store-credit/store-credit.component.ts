import { Component, OnInit } from '@angular/core';
import { IStoreCredit } from 'src/app/models/store-credit';

@Component({
  selector: 'app-store-credit',
  templateUrl: './store-credit.component.html',
  styleUrls: ['./store-credit.component.scss']
})
export class StoreCreditComponent implements OnInit {
  keyword: string = '';

  totalValueIssued: number = 1123;
  totalValueRedeemed: number = 12;
  outstandingBalance: number = 12334;
  
  creditData:IStoreCredit[] = [
    {
      customer: 'xxxx',
      totalIssued: 10,
      totalRedeemed: 34,
      balance: 1234
    },
    {
      customer: 'yyyy',
      totalIssued: 10,
      totalRedeemed: 34,
      balance: 1234
    },
    {
      customer: 'zzzz',
      totalIssued: 10,
      totalRedeemed: 34,
      balance: 1234
    },


  ];
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    //TODO: search store credit data using keyword
    console.log(this.keyword);
  }
}
