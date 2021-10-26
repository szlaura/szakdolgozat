import { MstotimeService } from './../../../helpers/mstotime.service';
import { MentalRotation } from './../../../shared/model/mentalrot.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mentrot-stat',
  templateUrl: './mentrot-stat.component.html',
  styleUrls: ['./mentrot-stat.component.scss'],
})
export class MentrotStatComponent implements OnInit {

  mentrot: Observable<MentalRotation[]> | null = null;
  h: any;
  m: any;
  s: any;
  iduser: any;


  constructor(private service: AuthService, private dataService: DataService, private timeService: MstotimeService) { }

  ngOnInit() {
    this.iduser = this.service.currentUserId;
    this.mentrotRight();
  }

  mentrotRight(){
    this.mentrot = this.dataService.get(this.iduser,'desc','mentalrotation','right');
  }
  mentrotWrong(){
    this.mentrot = this.dataService.get(this.iduser,'desc','mentalrotation','wrong');
  }
  mentrotFillDate(){
    this.mentrot = this.dataService.get(this.iduser,'desc','mentalrotation','date');
  }

  msToTime(value: any){
    return this.timeService.msToTime(value);
  }

}
