import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
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
            path: 'statistics',
            loadChildren: () => import('./../statistics/statistics.module').then(m => m.StatisticsModule),
          },
          {
            path: 'profile',
            loadChildren: () => import('./../profile/profile.module').then(m => m.ProfileModule),
          },
          {
            path: 'settings',
            loadChildren: () => import('./../settings/settings.module').then(m => m.SettingsModule),
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
