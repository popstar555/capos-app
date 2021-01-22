import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  viewMode: string = 'monthly';

  // current date
  curYear:number= 2020;
  curMon:number = 12;
  curDay:number = 21;

  // calculated values for summary
  totalByMonth: number        = 0;
  totalByDay: number          = 0;
  stockLevels: number         = 0;
  stockOnHand: number         = 0;
  productsByUser:number       = 0;
  productsByCustomer: number  = 0;
  productsByOutlet: number    = 0;
  productsBySupplier: number  = 0;
  registerClosures: number    = 0;

  //chart options
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions:ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          id: 'x-axis-0',
          gridLines:{
            color: 'rgba(200,200,200,0.3)'
          },
        }
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          gridLines: {
            color: 'rgba(200,200,200,0.3)',
          },
          ticks: {
            stepSize : 20,      // interval value of gridlines of y-axis
          }

        }
      ]
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#00c5ff',
      backgroundColor: 'rgba(255,255,255,0)',
      pointBackgroundColor: '#00c5ff',
    },
  ];
  public lineChartLegend = true;
  public lineChartType:ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeViewMode(){
    if(this.viewMode==='monthly'){
      const days=this.getDays(this.curYear, this.curMon);
      this.lineChartLabels=[];
      for(let i=1; i<=days; i++){
        this.lineChartLabels.push(i.toString());
      }
      
    }
    else if(this.viewMode==='daily'){
      this.lineChartLabels=[];
      for(let i=0; i<=24; i++){
        this.lineChartLabels.push(i.toString());
      }
    }
    else{ // if(this.viewMode==='yearly')
      this.lineChartLabels=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    }
  }

  getDays(year:number, month:number):number{
    return new Date(year, month, 0).getDate();
  }
}
