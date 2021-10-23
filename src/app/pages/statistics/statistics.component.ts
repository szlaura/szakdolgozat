import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {


  iduser: any;

  constructor(private service: AuthService) { }

  ngOnInit() {
    //this.dataService.getWcst(this.wcst);
    //this.asd = this.dataService.getAsd();
      //his.asd = this.dataService.getItem();
      this.iduser = this.service.currentUserId;
      console.log('statpagere lepeskor:'+this.iduser);
  }



}
