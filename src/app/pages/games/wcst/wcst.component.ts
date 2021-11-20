import { RightorwrongService } from './../../../services/rightorwrong.service';
import { SoundService } from './../../../services/sound.service';
import { DataService } from './../../../services/data.service';
import { Exit } from './../../../shared/guards/exitgame.guard';
import { Component, OnInit } from '@angular/core';
import { ResultService } from './../../../services/result.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wcst',
  templateUrl: './wcst.component.html',
  styleUrls: ['./wcst.component.scss']
})
export class WcstComponent implements OnInit, Exit{

cards = ['112', '113', '114', '121', '122', '123', '124', '131', '132', '133', '134', '141', '142', '143', '144',
  '211', '212', '213', '214', '221', '222', '223', '224', '231', '232', '233', '234', '241', '242', '243', '244',
  '311', '312', '313', '314', '321', '322', '323', '324', '331', '332', '333', '334', '341', '342', '343', '344',
  '411', '412', '413', '414', '421', '422', '423', '424', '431', '432', '433', '434', '441', '442', '443', '444'];

  refcard: any;

  variable='111';
  variable2='222';
  variable3='334';
  variable4='443';

  right=0;
  wrong=0;
  count=0;

  counter: any;

  choos = this.randomCardNoRepeat(this.cards);

  korte=true;
  //clicked=false;
  //ishidden = true;
  randomnumber: any;
  gameTime: any;
  st: any;
  nd: any;
  date: any;


constructor(public resultService: ResultService, private dataService: DataService,
    private soundService: SoundService, private rightorwrongService: RightorwrongService) { }


  ngOnInit() {
    this.refcard='111';
    this.counter=Math.floor(Math.random() * 3);
    this.randomnumber = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
  }

canExit(): boolean | Observable<boolean> | Promise<boolean>{
  if(this.korte === false){
    return confirm('Biztosan kilépsz?');
  } else{
    return true;
  }
};

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


randomCardNoRepeat(array: any) {
  const copy = array.slice(0);

  return function() {

    if (copy.length === 0) {
      this.endtimer();
      this.resultService.setData({name:'wcst', data:this.right, data2: this.wrong, data3:this.gameTime});
      this.dataService.addWCST(this.right, this.wrong, this.gameTime, this.date);
      this.resultService.presentModal();
      return 0;
    }

    const index = Math.floor(Math.random() * copy.length);
    const item = copy[index];
    copy.splice(index, 1);
    this.refcard=item;
    return item;
  };
}

chooseByNumber(event: string): void {
  if(event.charAt(0) === this.refcard.charAt(0)){
    this.countRight();
  }
  else{
    this.countWrong();
  }
}

chooseByColor(event: string): void {
  if(event.charAt(2) === this.refcard.charAt(2)){
    this.countRight();
  }
  else{
    this.countWrong();
  }
}
chooseByShape(event: string): void {
  if(event.charAt(1) === this.refcard.charAt(1)){
    this.countRight();
  }
  else{
    this.countWrong();
  }
}

clickCount(){
  this.count++;
  if (this.count === this.randomnumber){
    this.count=0;
    this.counter=Math.floor(Math.random() * 3);
  }
  return this.counter;
}

chooseCase(cardidentifier: string){

  const whichcase = this.counter;

  switch(whichcase) {
    case 0: //number
      this.chooseByNumber(cardidentifier);
      break;
    case 1: //color
      this.chooseByColor(cardidentifier);
      break;
    case 2: //shape
      this.chooseByShape(cardidentifier);
      break;
  }
}

countRight(){
  this.right++;
  this.soundService.playAudio('../../../../assets/audio/right.wav');
  this.rightorwrongService.showAlert('Jó válasz', `<img src="../../../../assets/pictures/rightanswer.png">`);
  this.choos();
}

countWrong(){
  this.wrong++;
  this.soundService.playAudio('../../../../assets/audio/wrong.mp3');
  this.rightorwrongService.showAlert('Rossz válasz', `<img src="../../../../assets/pictures/wronganswer.png">`);
  this.choos();
}

clickie(){
  this.korte=!this.korte;
}


}
