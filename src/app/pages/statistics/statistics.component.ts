import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {


  iduser: any;

  constructor(private service: AuthService) {
    this.iduser = this.service.currentUserId;
  }

  ngOnInit() {
      this.iduser = this.service.currentUserId;
  }

}
