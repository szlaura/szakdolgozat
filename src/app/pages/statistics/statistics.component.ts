import { Router, RouterModule } from '@angular/router';
import { DataService, WCST, IOWA } from './../../services/data.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {

  wcst=[];
  //wcst=new Observable<any[]>();
  iowa: Observable<IOWA[]> | null = null;
  h: any;
  m: any;
  s: any;
  asd: any;
  msg: any;
  ok= false;
  ok2=false;
  iduser: any;

  constructor(private service: AuthService, private dataService: DataService) { }

  ngOnInit() {
    //this.dataService.getWcst(this.wcst);
    //this.asd = this.dataService.getAsd();
      //his.asd = this.dataService.getItem();
      this.iduser = this.service.currentUserId;
      console.log('statpagere lepeskor:'+this.iduser);
  }


  iowashow(){
    this.iowa = this.dataService.get(this.iduser, 'iowa','wonmoney');
    this.ok2=true;
  }



  msToTime(duration: any) {
    const milliseconds = Math.floor((duration % 1000) / 100);
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    this.h = (hours < 10) ? '0' + hours : hours;
    this.m = (minutes < 10) ? '0' + minutes : minutes;
    this.s = (seconds < 10) ? '0' + seconds : seconds;

    return  minutes + ' p ' + seconds + ' mp ' + milliseconds + ' ms';
  }


}
