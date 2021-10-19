import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataService, IOWA } from 'src/app/services/data.service';

@Component({
  selector: 'app-iowa-stat',
  templateUrl: './iowa-stat.component.html',
  styleUrls: ['./iowa-stat.component.scss'],
})
export class IowaStatComponent implements OnInit {

  iowa: Observable<IOWA[]> | null = null;
  h: any;
  m: any;
  s: any;
  iduser: any;

  constructor(private service: AuthService, private dataService: DataService) { }

  ngOnInit() {
    this.iduser = this.service.currentUserId;
    this.iowaWonmoney();
  }

  iowaWonmoney(){
    this.iowa = this.dataService.get(this.iduser, 'iowa','wonmoney');
  }

  iowaLostmoney(){
    this.iowa = this.dataService.get(this.iduser, 'iowa','lostmoney');
  }

  iowaLoanEnd(){
    this.iowa = this.dataService.get(this.iduser, 'iowa','allmoney');
  }
  iowaFIllDate(){
    this.iowa = this.dataService.get(this.iduser, 'iowa','date');

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
