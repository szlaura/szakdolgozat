import { StatisticsComponent } from './statistics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'navstat', pathMatch: 'full' },
  {
    path: '',
    component: StatisticsComponent,
    //data: { title: 'Statistics' }
    children:[
    {
        path: 'navstat',
        loadChildren: () => import('./../statistics/navstatistics/navstatistics.module').then(m => m.NavstatisticsModule),
    },
    {
      path: 'statiowa',
      loadChildren: () => import('./../statistics/iowa-stat/iowa-stat.module').then(m => m.IowaStatModule),
    },
    {
      path: 'statwcst',
      loadChildren: () => import('./../statistics/wcst-stat/wcst-stat.module').then(m => m.WcstStatModule),
    },
    ],
    canActivateChild: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatsticsRoutingModule { }
