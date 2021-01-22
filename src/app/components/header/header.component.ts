import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() userName!: string;
  @Input() userAvatar!: string; 

  constructor(

  ) { }

  ngOnInit(): void {
  }

  logout(){

  }

}
