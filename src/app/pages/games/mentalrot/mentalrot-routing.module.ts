import { MentalrotComponent } from './mentalrot.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExitgameGuard } from 'src/app/shared/guards/exitgame.guard';


const routes: Routes = [
  {
      path: '',
      component: MentalrotComponent,
      canDeactivate: [ExitgameGuard],
      data: { title: 'Mental Rotartion' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ExitgameGuard]
})
export class MentalrotRoutingModule { }
