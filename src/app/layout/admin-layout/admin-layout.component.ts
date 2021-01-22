import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  userName: string;
  userAvatar: string;
  public cfgLeft: PerfectScrollbarConfigInterface = {};
  public cfgMain: PerfectScrollbarConfigInterface = {
    suppressScrollX: false,
    suppressScrollY: false,
  };
  
  constructor() {
    this.userName="Aleksandra";
    this.userAvatar="assets/img/default_user.png";

  }

  ngOnInit(): void {
  }

}
