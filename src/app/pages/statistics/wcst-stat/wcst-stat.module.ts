import { WcstStatRoutingModule } from './wcst-stat-routing.module';
import { IonicModule } from '@ionic/angular';
import { WcstStatComponent } from './wcst-stat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations:[WcstStatComponent],
  imports: [
    CommonModule, IonicModule, WcstStatRoutingModule
  ]
})
export class WcstStatModule { }
