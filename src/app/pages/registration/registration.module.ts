import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RegistrationRoutingModule, MatCardModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatChipsModule, MatDatepickerModule, MatIconModule
  ]
})
export class RegistrationModule { }
