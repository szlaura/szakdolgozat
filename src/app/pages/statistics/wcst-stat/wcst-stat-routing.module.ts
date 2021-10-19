import { WcstStatComponent } from './wcst-stat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WcstStatComponent,
    data: { title: 'Wcst Statistics' }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WcstStatRoutingModule { }
