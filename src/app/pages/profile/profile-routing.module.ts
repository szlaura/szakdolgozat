import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitgameGuard } from 'src/app/shared/guards/exitgame.guard';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canDeactivate: [ExitgameGuard],
    data: { title: 'Profil' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ExitgameGuard]
})
export class ProfileRoutingModule { }
