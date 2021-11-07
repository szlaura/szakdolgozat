import { WcstStatComponent } from './wcst-stat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WcstStatComponent,
    data: { title: 'WCST eredmenyek' }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WcstStatRoutingModule { }
