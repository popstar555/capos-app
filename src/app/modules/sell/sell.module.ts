import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellRoutingModule } from './sell-routing.module';
import { MainComponent } from './main/main.component';
//import { SubSidebarModule } from 'src/app/components/sub-sidebar/sub-sidebar.module';
//import { SubSidebarComponent } from 'src/app/components/sub-sidebar/sub-sidebar.component';
import { FormsModule } from '@angular/forms';
import { OpenComponent } from './open/open.component';
import { CloseComponent } from './close/close.component';
import { HistoryComponent } from './history/history.component';
import { CashManageComponent } from './cash-manage/cash-manage.component';

@NgModule({
  declarations: [
    MainComponent,
    OpenComponent,
    CloseComponent,
    HistoryComponent,
    CashManageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SellRoutingModule,

  ]
})
export class SellModule { }
