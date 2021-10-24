import { IonicModule } from '@ionic/angular';
import { MentrotStatComponent } from './mentrot-stat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentrotStatRoutingModule } from './mentrot-stat-routing.module';



@NgModule({
  declarations: [MentrotStatComponent],
  imports: [
    CommonModule, IonicModule, MentrotStatRoutingModule
  ]
})
export class MentrotStatModule { }
