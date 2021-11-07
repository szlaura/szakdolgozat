import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children:
        [
          {
            path: 'splash',
            loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
          },
          {
            path: 'iowa',
            loadChildren: () => import('./../games/iowa/iowa.module').then(m => m.IowaModule),
          },
          {
            path: 'wcst',
            loadChildren: () => import('./../games/wcst/wcst.module').then(m => m.WcstModule),
          },
          {
            path: 'mentalrotation',
            loadChildren: () => import('./../games/mentalrot/mentalrot.module').then(m => m.MentalrotModule),
          },
          {
            path: 'bart',
            loadChildren: () => import('./../games/bart/bart.module').then(m => m.BartModule),
          },
          {
            path: 'statistics',
            loadChildren: () => import('./../statistics/statistics.module').then(m => m.StatisticsModule),
          },
          {
            path: 'profile',
            loadChildren: () => import('./../profile/profile.module').then(m => m.ProfileModule),
          },
          {
            path: 'diagrams',
            loadChildren: () => import('./../diagrams/diagrams.module').then(m => m.DiagramsModule),
          }

        ],
        canActivateChild: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
