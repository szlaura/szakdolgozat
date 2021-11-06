import { IonicModule } from '@ionic/angular';
import { StatsticsRoutingModule } from './statstics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule, StatsticsRoutingModule, IonicModule
  ],
  exports: [StatisticsComponent]
})
export class StatisticsModule { }
