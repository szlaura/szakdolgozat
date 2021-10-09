import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule, IonicModule, ProfileRoutingModule
  ]
})
export class ProfileModule { }
