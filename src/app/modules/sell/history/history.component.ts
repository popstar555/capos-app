import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  navs=[
    {
      id: 'all',
      name: 'All',
      link: 'all'
    },
    {
      id: 'return',
      name: 'Process Return',
      link: 'return'
    },
    {
      id: 'sale',
      name: 'Continue Sale',
      link: 'sale'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
