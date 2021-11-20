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
    console.log('konstruktor');
  }
 /* ngOnDestroy() {
    this.userid='';
    this.nickname='';
    this.birth=0;
    this.sex='';
    this.user=null;
    console.log('DEEEEEEEEEEESTOOOOOOOY');
  }*/

  ngOnInit() {
    console.log('init profil');
    this.userid = this.auth.currentUserId;
    console.log('id profil initkor '+this.userid);
    this.email = this.auth.currentUserEmail;
    this.getUsersData();

  }

  canExit(): boolean | Observable<boolean> | Promise<boolean>{
    this.userid='';
    this.user=null;
    console.log('Useridnullazas: '+this.userid);
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

  updateee(){
   this.dataService.edit('OK BROsndosndok');
   //this.dataService.updateDoc('VMcjkLAWCTKXwzriHP8C', 'MIzu');
  }
}
