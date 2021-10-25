import { DiagramsComponent } from './diagrams.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExitgameGuard } from 'src/app/shared/guards/exitgame.guard';

const routes: Routes = [
  {
      path: '',
      canDeactivate: [ExitgameGuard],
      component: DiagramsComponent,
      data: { title: 'Statisztikák' }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagramsRoutingModule { }
