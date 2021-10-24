import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './../../../services/data.service';
import { Exit } from './../../../shared/guards/exitgame.guard';
import { ResultService } from './../../../services/result.service';
import { Observable } from 'rxjs';
import { RightorwrongService } from 'src/app/services/rightorwrong.service';
import { SoundService } from 'src/app/services/sound.service';


@Component({
  selector: 'app-mentalrot',
  templateUrl: './mentalrot.component.html',
  styleUrls: ['./mentalrot.component.scss'],
})
export class MentalrotComponent implements OnInit, Exit, OnDestroy {

  ishidden = true;
  korte=true;
  st: any;
  nd: any;
  date: any;
  gameTime: any;
  variable1='';
  variable2='';
  variable3='';
  cases = [1, 2, 3];
  timetoend=false;
  rightans = 0;
  wrongans = 0;
  average = [];
  times = [];
  avg=0;
  starttime=0;
  startdate: any;
  lastElement: any;
  beforelastElement: any;
  count=0;
  max = 0;

  constructor(private rightorwrongService: RightorwrongService, private soundService: SoundService,
    private resService: ResultService, private dataService: DataService) {
   }
  ngOnDestroy(): void {
    this.rightans = 0;
    this.wrongans = 0;
    this.average = [];
    this.times = [];
    this.avg=0;
    this.starttime=0;
    this.count=0;
    this.max=0;
  }

  ngOnInit() {
    this.count=0;
    this.max = this.cases.length;
    this.rightans = 0;
    this.wrongans = 0;
    this.average = [];
    this.times = [];
    this.avg=0;
    this.starttime=0;
    this.solution();
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
   // this.times.push(0);
    this.firsttime();
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
    console.log('Time'+this.gameTime);
  }

  right(){
    this.count++;
    this.rightans++;
    this.soundService.playAudio('../../../../assets/audio/right.wav');
    this.rightorwrongService.showAlert('Jó válasz', `<img src="../../../../assets/pictures/rightanswer.png">`);
    //this.choos();
    this.solution();
    this.timeTracking();
    if(this.count === this.max){
      this.gameEnd();
      return 0;
    }
  }

  wrong(){
    this.count++;
    this.wrongans++;
    this.soundService.playAudio('../../../../assets/audio/wrong.mp3');
    this.rightorwrongService.showAlert('Rossz válasz', `<img src="../../../../assets/pictures/wronganswer.png">`);
    this.solution();
    this.timeTracking();
    if(this.count === this.max){
     this.gameEnd();
      return 0;
    }
  }

  gameEnd(){
    this.endtimer();
    this.resService.setData({name:'mentalrotation', data:this.rightans, data2: this.wrongans, data3:this.gameTime});
    this.dataService.addMentalrotation(this.rightans, this.wrongans, this.averageReactTime(), this.gameTime, this.date);
    this.resService.presentModal();
  }

  randomInRange(min: number, max: number){
	  return Math.floor(Math.random() * (max - min + 1) + min);
  }

  answer(which: string){
    if(which === 'left' && this.variable2.includes('2')){
      this.right();
    } else if(which === 'right' && this.variable3.includes('2')){
      this.right();
    } else{
      this.wrong();
    }
  }
  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
  firsttime(){
    this.starttime=0;
    this.startdate=0;

    this.startdate =new Date();
    this.starttime =this.startdate.getTime();

    this.times.push(this.starttime);
    console.log('Times: '+this.times);
  }

  timeTracking(){
    this.starttime=0;
    this.startdate=0;

    this.startdate =new Date();
    this.starttime =this.startdate.getTime();

    this.times.push(this.starttime);
    console.log('Times: '+this.times);

    this.lastElement = this.times[this.times.length - 1];
    console.log('Lastelement: '+this.lastElement);

    this.beforelastElement = this.times[this.times.length - 2];
    console.log('BeforelastElement: '+this.beforelastElement);

    this.avg= this.lastElement - this.beforelastElement;
    this.average.push(this.avg);
    console.log('Average: '+this.average);

    this.averageReactTime();
  }

  averageReactTime(){
    let sum = 0;
    // eslint-disable-next-line prefer-const
    let length = this.average.length;
    console.log('AVERAGE LENGT'+length);
    // eslint-disable-next-line prefer-const
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let i = 0; i < this.average.length; i++ ){
      console.log('i ertekek:'+this.average[i]);
        sum += this.average[i]; //don't forget to add the base
    }
    console.log('SUM:'+sum);
    const avger = sum/length;
    console.log('AVERAGE: '+avger);
    return avger;
  }

  solution(){
    this.shuffleArray(this.cases);
    const rnd = this.cases.pop();
    if(this.cases.length === 0){
      this.timetoend = true;
      //return 0;
    }
     //const rnd = this.random(this.cases);
     //const rnd = this.randomRepeats(this.cases);
     console.log(rnd);
     switch(rnd){
       case 1:
         this.variable1 = 'alak1';
         const what = this.randomInRange(0, 1);
         if(what === 0) {
          this.variable2 = 'alak2';
          this.variable3 = 'alak3';
          console.log('variables1: '+ this.variable2 +this.variable3);
         } else{
          this.variable2 = 'alak3';
          this.variable3 = 'alak2';
          console.log('variables1: '+ this.variable2 +this.variable3);

         }

         break;
       case 2:
         this.variable1 = 'rbetu1';
         const what2 = this.randomInRange(0, 1);
         if(what2 === 0) {
          this.variable2 = 'rbetu2';
          this.variable3 = 'rbetu3';
          console.log('variables2: '+ this.variable2 +this.variable3);

         } else{
          this.variable2 = 'rbetu3';
          this.variable3 = 'rbetu2';
          console.log('variables2: '+ this.variable2 +this.variable3);
         }
         break;
       case 3:
         this.variable1 = 'madar1';
         const what3 = this.randomInRange(0, 1);
         if(what3 === 0) {
          this.variable2 = 'madar2';
          this.variable3 = 'madar3';
          console.log('variables3: '+ this.variable2 +this.variable3);
         } else{
          this.variable2 = 'madar3';
          this.variable3 = 'madar2';
          console.log('variables3: '+ this.variable2 +this.variable3);

         }
         break;
     }
  }

  /*randomRepeats(array: string[]) {
    let copy = array.slice(0);

    return function() {
      if (copy.length < 1) {
        console.log('Elfogyott');
        this.endtimer();
        /*this.modalService.setData({name:'wcst', data:this.right, data2: this.wrong, data3:this.gameTime});
        this.dataService.addWCST(this.right, this.wrong, this.gameTime, this.date);
        this.modalService.presentModal();*/
       /* copy = array.slice(0);}
      const index = Math.floor(Math.random() * copy.length);
      const item = copy[index];
      copy.splice(index, 1);
      console.log(item);
      this.variable1=item;
      //this.hanynaltart++;
      return item;
    };
  }*/
}
