import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent{

  email: any;
  isShown = true;

  constructor(private router: Router, private authService: AuthService, private menuCtrl: MenuController ) {
    this.hidefromAnonymus();
   }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('welcome');
  }


  closeMenu() {
    this.menuCtrl.close();
  }

  hidefromAnonymus(){
    if(this.authService.getifAnonymus() === true){
      this.isShown = !this.isShown;
    }
  }
}
