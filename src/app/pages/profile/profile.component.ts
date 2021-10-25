import { ChangepasswordService } from './../../services/changepassword.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  email: string;

  constructor(private auth: AuthService, private pwdService: ChangepasswordService) { }

  ngOnInit() {
    this.email = this.auth.currentUserEmail;
  }

  changePwd(){
    this.pwdService.presentAlertPrompt();
  }

}
