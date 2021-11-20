import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Component, HostListener } from '@angular/core';
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
  };

  constructor(private router: Router, private authService: AuthService) { }

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.registration();
  }

  registration(): void {
    if (this.form.invalid) {
        return;
    }
    if (this.form.value.password1 === this.form.value.password2) {
      this.authService.createUser(this.form.value.email, this.form.value.password1).then(
        () => {
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
        }
      );
    }
  }

}
