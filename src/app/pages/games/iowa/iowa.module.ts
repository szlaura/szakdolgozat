import { ResmodalComponent } from './endquestion/resmodal/resmodal.component';
import { EndquestionComponent } from './endquestion/endquestion.component';

import { IowaRoutingModule } from './iowa-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { IowaComponent } from './iowa.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [IowaComponent, EndquestionComponent, ResmodalComponent],
  imports: [
    CommonModule, IowaRoutingModule, MatCardModule, MatRippleModule, ContainerModule, IonicModule, FormsModule
  ]
})
export class IowaModule { }
