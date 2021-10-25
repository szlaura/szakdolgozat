import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  iduser: any;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required])
  });
  alertMessage = '';
  alertsList: any = {
    user: () => 'Hibás e-mail cím vagy jelszó.',
    server: () => 'A szolgáltatás nem elérhető.',
    false: () => ''
  };

  constructor(private router: Router, private authService: AuthService) { }

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.login();
  }

  ngOnInit(): void {
    this.authService.logout();
  }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  /*signAnonymus(): void {
    this.authService.signinAsAGusedt().then(
      result => {
        //console.log(result);
        this.navTo('/home');
      },
    );
  }*/

  login(): void {
    if (this.form.invalid) {
      return;
    }
    this.authService.login(this.form.value.email, this.form.value.password).then(
      result => {
        console.log(result);
        this.navTo('/home');
      },
      (error) => {
        this.alertMessage = (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
          ? this.alertsList.user() : this.alertsList.server();
      }
    );
  }
}
