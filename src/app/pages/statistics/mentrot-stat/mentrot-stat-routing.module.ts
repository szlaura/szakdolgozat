import { MentrotStatComponent } from './mentrot-stat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MentrotStatComponent,
    data: { title: 'MentRot Statistics' }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentrotStatRoutingModule { }
