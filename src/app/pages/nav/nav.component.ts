import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent{

  constructor(private router: Router, private authService: AuthService, private menuCtrl: MenuController ) { }

  logout(): void {
   this.authService.logout();
    console.log('mukodok');
    this.router.navigateByUrl('welcome'); //login volt
  }

  navigate(page: string){
    console.log('asd');
  }

  closeMenu() {
    this.menuCtrl.close();
  }
}
