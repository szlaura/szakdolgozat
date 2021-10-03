import { WcstComponent } from './wcst.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: WcstComponent,
        data: { title: 'Wisconsin Card Sorting' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WcstRoutingModule { }
