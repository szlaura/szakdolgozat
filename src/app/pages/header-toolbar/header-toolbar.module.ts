import { RouterModule } from '@angular/router';
import { HeaderToolbarComponent } from './header-toolbar.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeaderToolbarComponent],
  imports: [
    CommonModule, IonicModule, RouterModule
  ],
  exports:[HeaderToolbarComponent]
})
export class HeaderToolbarModule { }
