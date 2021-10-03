import { IonicModule } from '@ionic/angular';
import { ContainerModule } from './../../shared/components/container/container.module';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { SplashScreenComponent } from './splash-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule, SplashScreenRoutingModule, ContainerModule, IonicModule
  ]
})
export class SplashScreenModule { }
