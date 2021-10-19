import { DataService } from './../../../services/data.service';
import { ResultService } from './../../../services/result.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {

  message: any;
  ans: any;
  wcst=[];

  constructor(private modalCtrl: ModalController, private res: ResultService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    //this.dataService.getGamesList();
    //console.log(this.dataService.getGamesList());
    //this.message = this.dataService.getGame('M54oeP4kFriDjxZ17mkM');
    /*this.res.getMessage().subscribe((message) =>{
      this.message = message;
    } );*/
  }

  async closemodal(){
    await this.modalCtrl.dismiss();
  }

  gotoStatics(){
    this.router.navigate(['/home/statistics']);
  }

  gotoSplash(){
    this.router.navigate(['/home/splash']);
  }


}
