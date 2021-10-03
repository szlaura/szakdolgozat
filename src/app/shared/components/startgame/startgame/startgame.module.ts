import { IonicModule } from '@ionic/angular';
import { StartgameComponent } from './startgame.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [StartgameComponent],
  imports: [
CommonModule, IonicModule
  ],
   exports: [
    StartgameComponent
  ]
})
export class StartgameModule { }
