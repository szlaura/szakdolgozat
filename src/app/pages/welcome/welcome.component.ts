import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  imgsrc = '../../../../assets/pictures/psychiatry.png';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {}

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  signAnonymus(): void {
    this.authService.signinAsAGusedt().then(
      result => {
        //console.log(result);
        this.navTo('/home');
      },
    );
  }

}
