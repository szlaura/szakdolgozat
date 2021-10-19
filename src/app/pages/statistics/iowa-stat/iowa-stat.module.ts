import { IowaStatRoutingModule } from './iowa-stat-routing.module';
import { IowaStatComponent } from './iowa-stat.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [IowaStatComponent],
  imports: [
    CommonModule, IonicModule, IowaStatRoutingModule
  ]
})
export class IowaStatModule { }
