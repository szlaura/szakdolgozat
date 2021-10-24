import { BartStatComponent } from './bart-stat.component';
import { BartStatRoutingModule } from './bart-stat-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BartStatComponent],
  imports: [
    CommonModule, IonicModule, BartStatRoutingModule
  ]
})
export class BartStatModule { }
