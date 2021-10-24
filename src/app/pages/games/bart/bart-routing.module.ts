import { BartComponent } from './bart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExitgameGuard } from 'src/app/shared/guards/exitgame.guard';
const routes: Routes = [
  {
      path: '',
      component: BartComponent,
      canDeactivate: [ExitgameGuard],
      data: { title: 'Balloon Analog Rist Task' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ExitgameGuard]
})
export class BartRoutingModule { }
