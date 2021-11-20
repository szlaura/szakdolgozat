import { MentalrotComponent } from './mentalrot.component';
import { MentalrotRoutingModule } from './mentalrot-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MentalrotComponent],
  imports: [
    CommonModule, IonicModule, MentalrotRoutingModule
  ]
})
export class MentalrotModule { }
