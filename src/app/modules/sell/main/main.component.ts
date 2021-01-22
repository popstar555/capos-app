import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sellData=[
    {
      qyt: '',
      item: '',
      price: 0,
      discount: 0,
      total: 0,
      action: ''
    },
    {
      qyt: '',
      item: '',
      price: 0,
      discount: 0,
      total: 0,
      action: ''
    },
    {
      qyt: '',
      item: '',
      price: 0,
      discount: 0,
      total: 0,
      action: ''
    },
  ];

  keyword:string='';
  constructor() { }

  ngOnInit(): void {
  }

  searchData=()=>{
    //TODO: action for search sell data and save into this.sellData
    console.log(this.keyword);
  }
}
