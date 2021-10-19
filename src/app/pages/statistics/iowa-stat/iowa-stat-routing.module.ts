import { IowaStatComponent } from './iowa-stat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IowaStatComponent,
    data: { title: 'IOWA Statistics' }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IowaStatRoutingModule { }
