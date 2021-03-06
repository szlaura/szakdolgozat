import { DataService } from 'src/app/services/data.service';
import { User } from './../../shared/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Exit } from './../../shared/guards/exitgame.guard';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, Exit {

  userid: any;
  email: string;
  isEdit = false;
  birth: any;
  nickname: string;
  sex: string;
  user: Observable<User[]> | null = null;
  asd: any;
  empty: any;

  constructor(private auth: AuthService, private dataService: DataService) {
  }

  ngOnInit() {
    this.userid = this.auth.currentUserId;
    this.email = this.auth.currentUserEmail;
    this.getUsersData();

  }

  canExit(): boolean | Observable<boolean> | Promise<boolean>{
    this.userid='';
    this.user=null;
    return true;
};

  saveUsersData(){
    this.dataService.addUserData(this.nickname, this.birth, this.sex);
  }

  updateUsersData(){

  }

  getUsersData(){
    this.user = this.dataService.get(this.userid,'asc', 'user', 'nickname');
  }

  refresh(){
    this.isEdit = true;
  }

}
