import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MstotimeService } from 'src/app/helpers/mstotime.service';
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

  constructor(private service: AuthService, private dataService: DataService, private timeService: MstotimeService) { }

  ngOnInit() {
    this.iduser = this.service.currentUserId;
    this.wcstRight();
    //this.wcstshow();
  }

  wcstRight(){
    this.wcst = this.dataService.get(this.iduser,'desc','wcst','right');
  }
  wcstFillDate(){
    this.wcst = this.dataService.get(this.iduser,'desc','wcst','date');
  }
  wcstWrong(){
    this.wcst = this.dataService.get(this.iduser,'desc','wcst','wrong');
  }

  msToTime(duration: any) {
    return this.timeService.msToTime(duration);
  }

}
