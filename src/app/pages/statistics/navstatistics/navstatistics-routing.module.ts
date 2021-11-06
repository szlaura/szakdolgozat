import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavstatisticsComponent } from './navstatistics.component';

const routes: Routes = [
  {
    path: '',
    component: NavstatisticsComponent,
    data: { title: 'Eredmenyek' }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavstatisticsRoutingModule { }
