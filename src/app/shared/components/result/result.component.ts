import { Subscription } from 'rxjs';
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

  constructor(private modalCtrl: ModalController, private res: ResultService, private router: Router) { }

  ngOnInit() {
    this.res.getMessage().subscribe((message) =>{
      this.message = message;
    } );
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
