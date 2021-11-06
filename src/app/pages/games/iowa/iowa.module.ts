import { StartgameModule } from './../../../shared/components/startgame/startgame/startgame.module';
import { MatRadioModule } from '@angular/material/radio';
import { EndquestionComponent } from './endquestion/endquestion.component';
import { IowaRoutingModule } from './iowa-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IowaComponent } from './iowa.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [IowaComponent, EndquestionComponent],
  imports: [
    CommonModule, IowaRoutingModule, IonicModule
  ]
})
export class IowaModule { }
