import { IowaComponent } from './iowa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitgameGuard } from 'src/app/shared/guards/exitgame.guard';

const routes: Routes = [
  {
    path: '',
    component: IowaComponent,
    canDeactivate: [ExitgameGuard],
    data: { title: 'Iowa Gambling' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ExitgameGuard]
})
export class IowaRoutingModule { }
