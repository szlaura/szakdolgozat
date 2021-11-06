import { StartgameModule } from './../../../shared/components/startgame/startgame/startgame.module';
import { BartRoutingModule } from './bart-routing.module';
import { IonicModule } from '@ionic/angular';
import { BartComponent } from './bart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BartComponent],
  imports: [
    CommonModule, IonicModule, BartRoutingModule
  ]
})
export class BartModule { }
