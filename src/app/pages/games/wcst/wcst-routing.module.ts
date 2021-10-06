import { WcstComponent } from './wcst.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitgameGuard } from 'src/app/shared/guards/exitgame.guard';


const routes: Routes = [
    {
        path: '',
        component: WcstComponent,
        canDeactivate: [ExitgameGuard],
        data: { title: 'Wisconsin Card Sorting' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WcstRoutingModule { }
