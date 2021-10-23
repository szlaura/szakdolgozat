import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { WCST } from 'src/app/shared/model/wcst.model';

@Component({
  selector: 'app-wcst-stat',
  templateUrl: './wcst-stat.component.html',
  styleUrls: ['./wcst-stat.component.scss'],
})
export class WcstStatComponent implements OnInit {

  wcst: Observable<WCST[]> | null = null;
  h: any;
  m: any;
  s: any;
  iduser: any;

  constructor(private service: AuthService, private dataService: DataService) { }

  ngOnInit() {
    this.iduser = this.service.currentUserId;
    this.wcstRight();
    //this.wcstshow();
  }

  wcstRight(){
    this.wcst = this.dataService.get(this.iduser,'wcst','right');
  }
  wcstFillDate(){
    this.wcst = this.dataService.get(this.iduser,'wcst','date');
  }
  wcstWrong(){
    this.wcst = this.dataService.get(this.iduser,'wcst','wrong');
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
