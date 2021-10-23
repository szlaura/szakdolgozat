import { IonicModule } from '@ionic/angular';
import { DiagramsComponent } from './diagrams.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramsRoutingModule } from './diagrams-routing.module';



@NgModule({
  declarations: [DiagramsComponent],
  imports: [
    CommonModule, IonicModule, DiagramsRoutingModule
  ]
})
export class DiagramsModule { }
