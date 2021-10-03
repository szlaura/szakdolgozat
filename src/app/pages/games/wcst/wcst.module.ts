import { IonicModule } from '@ionic/angular';
import { WcstRoutingModule } from './wcst-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { WcstComponent } from './wcst.component';
import { RigthorwrongComponent } from './modal/rigthorwrong/rigthorwrong.component';
import { StartgameModule } from './../../../shared/components/startgame/startgame/startgame.module';

@NgModule({
  declarations: [WcstComponent, RigthorwrongComponent],
  imports: [
    CommonModule, WcstRoutingModule, MatCardModule, MatRippleModule, ContainerModule, IonicModule, StartgameModule
  ]
})
export class WcstModule { }
