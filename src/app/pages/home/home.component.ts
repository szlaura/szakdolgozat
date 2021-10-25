import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  iduser: any;

  constructor(private auth: AuthService) {
    this.iduser = this.auth.currentUserId;
    console.log('START1:'+this.iduser);
   }
   ngOnInit(){
    this.iduser = this.auth.currentUserEmail;
    console.log('START2:'+this.iduser);
   }

}
