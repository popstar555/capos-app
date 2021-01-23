import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  startDate: string = '';
  endDate: string = '';
  keyword: string = '';

  cfgDatePicker1={
    format: "YYYY-MM-DD",
  };
  cfgDatePicker2={
    format: "YYYY-MM-DD",
  };

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    //TODO: search sales reports and update this.salesData
    console.log('search from', this.startDate, ' to ', this.endDate);
  }

  toExcel(){
    //TODO: export to excel
  }
}
