import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ResultService } from 'src/app/services/result.service';
import { RightorwrongService } from 'src/app/services/rightorwrong.service';
import { SoundService } from 'src/app/services/sound.service';
import { Exit } from 'src/app/shared/guards/exitgame.guard';

@Component({
  selector: 'app-bart',
  templateUrl: './bart.component.html',
  styleUrls: ['./bart.component.scss'],
})
export class BartComponent implements OnInit, Exit, OnDestroy{

  ishidden = true;
  korte=true;
  st: any;
  nd: any;
  date: any;
  gameTime: any;
  tempmoney = 0;
  bankmoney = 0;
  max = 0;
  one = [5, 10, 15, 20, 25];
  two = [30, 35, 40, 45, 50];
  three = [55, 60, 65, 70, 75];
  random = [1, 2, 3];
  scale = 0;
  scale2 = 1;
  round=0;
  won = 0;
  lose = 0;
  maxWon = 0;
  wonamount = [];
  putToBank = 0;


  constructor(private rightorwrongService: RightorwrongService, private soundService: SoundService,
    private resService: ResultService, private dataService: DataService) { }

  ngOnDestroy() {
    this.korte=true;
  };

  ngOnInit() {
    this.whatistheMax(1);
    this.ishidden = true;
    this.korte=true;
    this.tempmoney = 0;
    this.bankmoney = 0;
    //this.scale = 0;
    //this.scale2 = 1;
    this.round=0;
    this.won = 0;
    this.lose = 0;
    this.maxWon = 0;
    this.wonamount = [];
    this.putToBank = 0;
  }

  canExit(): boolean | Observable<boolean> | Promise<boolean>{
    if(this.korte === false){
      return confirm('Biztosan kilépsz?');
    } else{
      return true;
    }
  };

  clickie(){
    this.korte=!this.korte;
  }

  starttimer(){
    const startTime = new Date();
    this.st=startTime.getTime();
    this.date = new Date();
  }

  endtimer(){
    const endTime = new Date();
    this.nd=endTime.getTime();
    this.korte=true;
    this.countTime();
  }

  countTime(){
    this.gameTime = this.nd-this.st;
  }

  upMoney(){
    this.scale++;

    if(this.scale === 9){
      this.scale=0;
      this.scale2++;
    }
    document.getElementById('balloon').style.transform='scale('+this.scale2+'.'+this.scale+')';
    this.tempmoney+=5;

    if(this.tempmoney > this.max){
      this.lose++;
      this.scale=0;
      this.scale2=1;
      document.getElementById('balloon').style.transform='scale('+this.scale2+'.'+this.scale+')';
      this.youlostMoney();

      if(this.round === 15){
        this.endtimer();
        this.endGame();
        return 0;
      }
      this.round++;
      this.tempmoney=0;
      this.randomCase();
    }
  }

  youlostMoney(){
    this.soundService.playAudio('../../../../assets/audio/wrong.mp3');
    this.rightorwrongService.showAlert('Elvesztetted a pénzt', `<img src="../../../../assets/pictures/wronganswer.png">`);
  }

  youwonMoney(){
    this.soundService.playAudio('../../../../assets/audio/chaching.mp3');
    this.rightorwrongService.showAlert('A bankban a pénz', `<img src="../../../../assets/pictures/dollar.png">`);
  }

  addtoBank(){
    this.putToBank++;
    this.bankmoney+=this.tempmoney;
    this.wonamount.push(this.tempmoney);
    this.tempmoney=0;
    this.scale=0;
    this.scale2=1;

    document.getElementById('balloon').style.transform='scale('+this.scale2+'.'+this.scale+')';

    if(this.tempmoney < this.max){
      this.youwonMoney();
      this.round++;
      this.won++;

      if(this.round === 15){
        this.endtimer();
        this.endGame();
        return 0;
      }
      this.randomCase();
    }
  }

  endGame(){
    this.maxWon = Math.max.apply(null, this.wonamount);
    this.resService.setData({name:'bart', data:this.bankmoney, data2: this.maxWon, data3:this.gameTime});
    this.dataService.addBART(this.won, this.lose, this.maxWon, this.bankmoney, this.gameTime, this.date);
    this.resService.presentModal();

  }

  randomCase(){
    // eslint-disable-next-line prefer-const
    let rnd = this.random[Math.floor(Math.random()*this.random.length)];
    this.whatistheMax(rnd);
  }

  whatistheMax(num: number){
    switch(num){
      case 1:
        // eslint-disable-next-line prefer-const
        let item1 = this.one[Math.floor(Math.random()*this.one.length)];
        this.max = item1;
        break;
      case 2:
         // eslint-disable-next-line prefer-const
        let item2 = this.two[Math.floor(Math.random()*this.two.length)];
        this.max = item2;
        break;
      case 3:
         // eslint-disable-next-line prefer-const
        let item3 = this.three[Math.floor(Math.random()*this.three.length)];
        this.max = item3;
        break;
    }

  }

}
