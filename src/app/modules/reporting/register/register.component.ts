import { Component, OnInit } from '@angular/core';
import { IRegisterClosure } from 'src/app/models/register-closure';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerData:IRegisterClosure[] = [
    {
      register: 'sdfsf',
      timeOpened: '12:33:43',
      timeClosed: '16:17:39',
      storeCredit: 234,
      cashConcealed: 33,
      cash: 342,
      creditCard: 11,
      total: 2421
    },
    {
      register: 'sdfsf',
      timeOpened: '12:33:43',
      timeClosed: '16:17:39',
      storeCredit: 234,
      cashConcealed: 33,
      cash: 342,
      creditCard: 11,
      total: 2421
    },
    {
      register: 'sdfsf',
      timeOpened: '12:33:43',
      timeClosed: '16:17:39',
      storeCredit: 234,
      cashConcealed: 33,
      cash: 342,
      creditCard: 11,
      total: 2421
    },
    {
      register: 'sdfsf',
      timeOpened: '12:33:43',
      timeClosed: '16:17:39',
      storeCredit: 234,
      cashConcealed: 33,
      cash: 342,
      creditCard: 11,
      total: 2421
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
