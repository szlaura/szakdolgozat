import { ResultComponent } from './../../../shared/components/result/result.component';
import { IonicModule } from '@ionic/angular';
import { WcstRoutingModule } from './wcst-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcstComponent } from './wcst.component';
import { RigthorwrongComponent } from './modal/rigthorwrong/rigthorwrong.component';
import { StartgameModule } from './../../../shared/components/startgame/startgame/startgame.module';

@NgModule({
  declarations: [WcstComponent, RigthorwrongComponent, ResultComponent],
  imports: [
    CommonModule, WcstRoutingModule, IonicModule, StartgameModule
  ]
})
export class WcstModule { }
