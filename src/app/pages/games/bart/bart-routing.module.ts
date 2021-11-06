import { BartComponent } from './bart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitgameGuard } from 'src/app/shared/guards/exitgame.guard';

const routes: Routes = [
  {
    path: '',
    component: BartComponent,
    canDeactivate: [ExitgameGuard],
    data: { title: 'Balloon Analog RIsk Task' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ExitgameGuard]
})
export class BartRoutingModule { }
