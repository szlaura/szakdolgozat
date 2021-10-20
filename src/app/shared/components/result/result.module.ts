import { ResultComponent } from './result.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule, IonicModule, RouterModule
  ],
  exports: [ResultComponent]
})
export class ResultModule { }
