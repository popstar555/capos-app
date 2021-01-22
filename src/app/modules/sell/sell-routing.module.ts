import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashManageComponent } from './cash-manage/cash-manage.component';
import { CloseComponent } from './close/close.component';
import { HistoryComponent } from './history/history.component';
import { MainComponent } from './main/main.component';
import { OpenComponent } from './open/open.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'open',
    component: OpenComponent
  },
  {
    path: 'close',
    component: CloseComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
    children: [
      {
        path: '',
        loadChildren: ()=>import('./history/history.module').then(m => m.HistoryModule)
      }
    ]

  },
  {
    path: 'cash',
    component: CashManageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellRoutingModule { }
