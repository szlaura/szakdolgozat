import { LoadingService } from './../../services/loading.service';
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

  constructor(private router: Router, private authService: AuthService, private loadingService: LoadingService) {
    this.router.onSameUrlNavigation='reload';
  }

  ngOnInit() {}

  navTo(url: string): void {
    this.loadingService.presentLoading();
    this.router.navigateByUrl(url);
    this.authService.isAnonymus('not');
  }

  signInAnonymus(): void {
    this.authService.signinAsAGuest().then(
      result => {
        this.navTo('/home');
        this.authService.isAnonymus('anon');
      },
    );
  }

}
