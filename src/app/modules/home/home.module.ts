import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ChartsModule,

  ]
})
export class HomeModule { }
