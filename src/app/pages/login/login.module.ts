import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, LoginRoutingModule, MatCardModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
     MatInputModule, MatChipsModule, MatIconModule
  ]
})
export class LoginModule { }
