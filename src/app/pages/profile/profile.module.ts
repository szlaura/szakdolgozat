import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule, IonicModule, ProfileRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class ProfileModule { }
