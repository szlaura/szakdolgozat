import { Observable } from 'rxjs';
import { DataService } from './../../../services/data.service';
import { ResultService } from './../../../services/result.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, OnDestroy {

  message: any;
  name: string;
  alu: any;
  alu2: any;
  alu3: any;
  ans: any;
  h: any;
  m: any;
  s: any;

  constructor(private modalCtrl: ModalController, private res: ResultService, private router: Router, private dataService: DataService) { }

  ngOnInit() {

    this.message = this.res.getData().subscribe(data => {
      this.name = data.name;
      this.alu = data.data;
      this.alu2=data.data2;
      this.alu3 = data.data3;});
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


    ngOnDestroy() {
      this.message.unsubscribe();
  }

}
