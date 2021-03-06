import { DiagramsComponent } from './diagrams.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitgameGuard } from 'src/app/shared/guards/exitgame.guard';

const routes: Routes = [
  {
      path: '',
      component: DiagramsComponent,
      canDeactivate: [ExitgameGuard],
      data: { title: 'Statisztikak' }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagramsRoutingModule { }
