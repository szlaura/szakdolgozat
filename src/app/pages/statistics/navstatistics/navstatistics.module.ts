import { NavstatisticsRoutingModule } from './navstatistics-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavstatisticsComponent } from './navstatistics.component';



@NgModule({
  declarations: [NavstatisticsComponent],
  imports: [
    CommonModule, IonicModule, NavstatisticsRoutingModule
  ]
})
export class NavstatisticsModule { }
