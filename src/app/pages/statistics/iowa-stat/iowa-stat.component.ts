import { MstotimeService } from './../../../helpers/mstotime.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { IOWA } from 'src/app/shared/model/iowa.model';

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

  constructor(private service: AuthService, private dataService: DataService, private timeService: MstotimeService) {
  }

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
    return this.timeService.msToTime(duration);
  }

}
