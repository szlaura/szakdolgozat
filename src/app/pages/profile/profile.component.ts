import { DataService } from 'src/app/services/data.service';
import { User } from './../../shared/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Exit } from './../../shared/guards/exitgame.guard';
import { defaultIfEmpty, map } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, Exit, OnDestroy {

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
  ngOnDestroy() {
    this.userid='';
    this.nickname='';
    this.birth=0;
    this.sex='';
  }

  ngOnInit() {
    console.log('init');
    this.userid = this.auth.currentUserId;
    console.log(this.userid);
    this.email = this.auth.currentUserEmail;
    this.getUsersData();

  }

  canExit(): boolean | Observable<boolean> | Promise<boolean>{
    this.userid='';
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
    /*if(this.user === null){
      console.log(this.user);
      this.isEdit = false;
    }
    else{
      console.log(this.user);
      this.isEdit = true;
    }*/
    /*this.empty = this.user.pipe(map(list => list.length === 0));
    console.log('empty'+this.empty);

    this.empty = this.user.pipe(
      map(count => count.length > 0), defaultIfEmpty(false));
  console.log('empty'+this.empty.defaultIfEmpty);*/

  }

  refresh(){
    this.isEdit = true;
  }
}
