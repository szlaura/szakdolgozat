import { GoNogoComponent } from './go-nogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitgameGuard } from 'src/app/shared/guards/exitgame.guard';



const routes: Routes = [
  {
    path: '',
    component: GoNogoComponent,
    canDeactivate: [ExitgameGuard],
    data: { title: 'Go/No-Go' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoNogoRoutingModule { }
