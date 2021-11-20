import { DataService } from './../../../services/data.service';
import { Exit } from './../../../shared/guards/exitgame.guard';
import { EndquestionComponent } from './endquestion/endquestion.component';
import { ResultService } from './../../../services/result.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-iowa',
  templateUrl: './iowa.component.html',
  styleUrls: ['./iowa.component.scss']
})
export class IowaComponent implements OnInit, Exit{

  @ViewChild(EndquestionComponent) endquestion: any;

  arrayCards = ['A', 'B', 'C', 'D'];
  startMoney = 2000;
  wonMoney = 0;
  lostMoney=0;
  clicked = false;
  korte = true;
  hidewhileend= true;
  showstartbtn=false;
  cardClicked = false;
  lost50 = 50;
  lost250 = 250;
  won100 = 100;
  won50 = 50;
  currentMoney: number;
  enable = false;
  clickCount = 0;
  valueA = 0;
  valueB = 0;
  valueC = 0;
  valueD = 0;
  clickedA = 0;
  clickedB = 0;
  clickedC = 0;
  clickedD = 0;
  gameTime: any;
  startTime: any;
  st: any;
  nd: any;
  fillDate: any;
  showstart = true;
  mostClicked = '';
  maxValueCard = '';


  constructor(private resService: ResultService, private dataservice: DataService) {
    this.currentMoney =this.startMoney;
    this.shuffleArray(this.arrayCards);
  }

  ngOnInit() {
    this.startMoney = 2000;
    this.wonMoney = 0;
    this.lostMoney=0;
    this.valueA = 0;
    this.valueB = 0;
    this.valueC = 0;
    this.valueD = 0;
    this.maxValueCard = '';
    this.mostClicked = '';
    this.korte=true;
    console.log('Iowa init');
  }

  canExit(): boolean | Observable<boolean> | Promise<boolean>{
    if(this.korte === false){
      return confirm('Biztosan kilépsz?');;
    } else{
    return true;
  }
  };

  starttimer(){
    this.startTime = new Date();
    this.st=this.startTime.getTime();
    this.fillDate= new Date();
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

  caseOne(){
    this.wonMoney=0;
    this.lostMoney=0;
    this.currentMoney+=this.won100;
    const reduceOrNo= Math.random() < 0.5;
    this.wonMoney+=this.won100;

    if(reduceOrNo === true){
      this.currentMoney-=this.lost250;
      this.lostMoney-=this.lost250;
      return 'lost250';
    }
    return 'won100';
  }

  caseTwo(){
    this.wonMoney=0;
    this.lostMoney=0;
    this.currentMoney+=this.won50;
    const reduceOrNo2= Math.random() < 0.5;
    this.wonMoney+=this.won50;

    if(reduceOrNo2 === true){
      this.currentMoney-=this.lost50;
      this.lostMoney-=this.lost50;
      return 'lost50';
    }
    return 'won50';
  }

  whichCardAdd(card: string, moneyValue: string){
    switch(card){
      case 'A':
        this.clickedA++;
        if(moneyValue === 'lost250'){
          this.valueA-=this.lost250;
          this.valueA+=this.won100;
        } else if(moneyValue === 'won100'){
          this.valueA+=this.won100;
        } else if(moneyValue === 'won50'){
          this.valueA+=this.won50;
        }
        break;
      case 'B':
        this.clickedB++;
        if(moneyValue === 'lost250'){
          this.valueB-=this.lost250;
          this.valueB+=this.won100;
        } else if(moneyValue === 'won100'){
          this.valueB+=this.won100;
        }else if(moneyValue === 'won50'){
          this.valueB+=this.won50;
        }
        break;
      case 'C':
        this.clickedC++;
        if(moneyValue === 'lost250'){
          this.valueC-=this.lost250;
          this.valueC+=this.won100;
        } else if(moneyValue === 'won100'){
          this.valueC+=this.won100;
        } else if(moneyValue === 'won50'){
          this.valueC+=this.won50;
        }
        break;
      case 'D':
        this.clickedD++;
        if(moneyValue === 'lost250'){
          this.valueD-=this.lost250;
          this.valueD+=this.won100;
        } else if(moneyValue === 'won100'){
          this.valueD+=this.won100;
        } else if(moneyValue === 'won50'){
          this.valueD+=this.won50;
        }
        break;
    }
  }

  whichisMax(a: number, b: number, c: number, d: number){
    if(a >= b && a >= c && a >= d){
      return 'A';
    }
    else if(b >= a && b >= c && b >= d){
      return 'B';
    }
    else if(c >= b && c >= a && c >= d){
      return 'C';
    }
    else if(d >= b && d >= c && d >= a){
      return 'D';
    }

  }
  startbtnhide(){
    this.showstartbtn=!this.showstartbtn;
  }

  clickie(){
    this.korte=!this.korte;
  }

  dialog(){
    this.resService.presentModal();
  }

  gameEnd(){
      this.mostClicked = this.whichisMax(this.clickedA, this.clickedB, this.clickedC, this.clickedD);
      this.maxValueCard = this.whichisMax(this.valueA, this.valueB, this.valueC, this.valueD);
      this.enable=true;
      this.clickie();
      this.hidewhileend = !this.hidewhileend;
      this.korte=true;
  }

  clickieCard(whichyouclicked: string){

    this.clickCount++;

    if(this.clickCount === 25){
      this.endtimer();
      this.gameEnd();
      this.resService.setData({name: 'iowa', data:this.currentMoney, data2:this.gameTime, data3: this.maxValueCard});
      this.dataservice.addIOWA(this.mostClicked, this.maxValueCard, this.currentMoney, this.gameTime, this.fillDate);
    }

    if(whichyouclicked === this.arrayCards[0]){
      this.caseOne();
      this.whichCardAdd(whichyouclicked,this.caseOne());
    }
    else if(whichyouclicked === this.arrayCards[1]){
      this.caseOne();
      this.whichCardAdd(whichyouclicked,this.caseOne());
    }
    else if(whichyouclicked === this.arrayCards[2]){
      this.caseTwo();
      this.whichCardAdd(whichyouclicked,this.caseTwo());
    }
    else if(whichyouclicked === this.arrayCards[3]){
      this.caseTwo();
      this.whichCardAdd(whichyouclicked,this.caseTwo());
    }
  }

  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

}
