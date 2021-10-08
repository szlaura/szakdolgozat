import { IonicModule } from '@ionic/angular';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule, WelcomeRoutingModule, IonicModule
  ]
})
export class WelcomeModule { }
