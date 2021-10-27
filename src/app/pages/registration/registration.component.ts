import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{
  hide = true;
  hide2 = true;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [ Validators.email, Validators.required]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });
  alertMessage = '';
  alertsList: any = {
    user: () => 'Hibás e-mail cím.',
    server: () => 'A szolgáltatás nem elérhető.',
    alreadyuse: () =>'Az e-mail cím már használatban van.',
    false: () => ''
  };

  //error = false;
  //auth/invalid-email
  //'auth/email-already-in-use'

  constructor(private router: Router, private authService: AuthService) { }

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.registration();
  }
  registration(): void {
    //this.error = false;
    //if (this.form.valid) {
      if (this.form.invalid) {
        return;
      }
      if (this.form.value.password1 === this.form.value.password2) {
        this.authService.createUser(this.form.value.email, this.form.value.password1).then(
          result => {
            console.log(result);
            this.router.navigateByUrl('/login');
          },
          (error) => {
            if(error.code ==='auth/invalid-email'){
              this.alertMessage = this.alertsList.user();
            } else if(error.code ==='auth/email-already-in-use'){
              this.alertMessage = this.alertsList.alreadyuse();
            } else{
              this.alertMessage = this.alertsList.server();
            }
            //this.alertMessage = (error.code === 'auth/invalid-email')
            //? this.alertsList.user() : this.alertsList.server();
          }
        );
        //}
        //this.router.navigateByUrl('/login');
        //return;
      }
    }
    //this.error = true;
  //}
}
