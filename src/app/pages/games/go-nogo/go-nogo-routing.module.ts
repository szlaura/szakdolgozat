import { GoNogoComponent } from './go-nogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: GoNogoComponent,
    data: { title: 'Go/No-Go' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoNogoRoutingModule { }
