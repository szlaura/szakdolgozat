import { GoNogoRoutingModule } from './go-nogo-routing.module';
import { StartgameModule } from './../../../shared/components/startgame/startgame/startgame.module';
import { IonicModule } from '@ionic/angular';
import { GoNogoComponent } from './go-nogo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [GoNogoComponent],
  imports: [
    CommonModule, IonicModule, StartgameModule, GoNogoRoutingModule
  ]
})
export class GoNogoModule { }
