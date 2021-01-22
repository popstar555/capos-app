import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss']
})

export class OpenComponent implements OnInit {
  float: string='';
  note: string='';
  error: string='';

  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  openRegister(){
    if(this.float===''){
      this.error="Must input a opening float.";
      return;
    }
    else{
      //TODO: opening register
      console.log(this.float, this.note);
      this.router.navigate(['sell/close']);
    }
  }
}
