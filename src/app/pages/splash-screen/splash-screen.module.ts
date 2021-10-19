import { IonicModule } from '@ionic/angular';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { SplashScreenComponent } from './splash-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule, SplashScreenRoutingModule, IonicModule
  ]
})
export class SplashScreenModule { }
