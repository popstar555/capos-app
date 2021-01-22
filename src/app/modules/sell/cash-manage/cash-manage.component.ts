import { Component, OnInit } from '@angular/core';
import { ICashItem } from 'src/app/models/cash-item';

@Component({
  selector: 'app-cash-manage',
  templateUrl: './cash-manage.component.html',
  styleUrls: ['./cash-manage.component.scss']
})
export class CashManageComponent implements OnInit {
  cashData: ICashItemEdit[]=[
    {
      date: '12/23/2020',
      user: 'xxx',
      reasons: 'so so so',
      transaction: 234.41,
      selected: false
    },
    {
      date: '12/23/2020',
      user: 'xxx',
      reasons: 'so so so',
      transaction: 234.41,
      selected: false
    },
    {
      date: '12/23/2020',
      user: 'xxx',
      reasons: 'so so so',
      transaction: 234.41,
      selected: false
    },
    {
      date: '12/23/2020',
      user: 'xxx',
      reasons: 'so so so',
      transaction: 234.41,
      selected: false

    },
    {
      date: '12/23/2020',
      user: 'xxx',
      reasons: 'so so so',
      transaction: 234.41,
      selected: false

    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  removeCash(){

  }

  addCash(){

  }
}

interface ICashItemEdit extends ICashItem{
  selected: boolean
}
