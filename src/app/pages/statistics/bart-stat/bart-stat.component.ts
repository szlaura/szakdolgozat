import { BART } from './../../../shared/model/bart.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MstotimeService } from 'src/app/helpers/mstotime.service';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bart-stat',
  templateUrl: './bart-stat.component.html',
  styleUrls: ['./bart-stat.component.scss'],
})
export class BartStatComponent implements OnInit {

  bart: Observable<BART[]> | null = null;
  h: any;
  m: any;
  s: any;
  iduser: any;

  constructor(private authService: AuthService, private dataService: DataService, private timeService: MstotimeService) { }

  ngOnInit() {
    this.iduser = this.authService.currentUserId;
    this.bankMoney();
  }

  bankMoney(){
    this.bart = this.dataService.get(this.iduser,'desc','bart','bankmoey');
  }
  bartFillDate(){
    this.bart = this.dataService.get(this.iduser,'desc','bart','date');
  }
  lostTimes(){
    this.bart = this.dataService.get(this.iduser,'desc','bart','losttimes');
  }
  wonTimes(){
    this.bart = this.dataService.get(this.iduser,'desc','bart','wontimes');
  }
  maxWonMoney(){
    this.bart = this.dataService.get(this.iduser,'desc','bart','maxwon');
  }

  msToTime(duration: any) {
    return this.timeService.msToTime(duration);
  }

}
