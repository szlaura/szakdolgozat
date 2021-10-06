import { ConfirmexitModule } from './../../../shared/components/confirmexit/confirmexit.module';
import { Exit } from './../../../shared/guards/exitgame.guard';
import { EndquestionComponent } from './endquestion/endquestion.component';
import { ResultService } from './../../../services/result.service';
import { Component, HostListener, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-iowa',
  templateUrl: './iowa.component.html',
  styleUrls: ['./iowa.component.scss']
})
export class IowaComponent implements Exit{

  @HostListener('window:beforeunload')
  @ViewChild(EndquestionComponent) endquestion: any;

  arrayCards = ['A', 'B', 'C', 'D'];
  arrayTwo = [];
  startMoney = -2000;
  wonMoney = 0;
  lostMoney=0;
  randomBoolean = Math.random() < 0.5;
  clicked = false;
  ishidden = true;
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
  enableBack = true;
  showBackdrop = false;
  valueA = 0;
  valueB = 0;
  valueC = 0;
  valueD = 0;
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  content = <HTMLInputElement> document.getElementById('content');
   // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  cardA = <HTMLInputElement> document.getElementById('A');
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  cardB = <HTMLInputElement> document.getElementById('B');
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  cardC = <HTMLInputElement> document.getElementById('C');
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  cardD = <HTMLInputElement> document.getElementById('D');


  constructor(public modalService: ResultService) {
    this.currentMoney =this.startMoney;
    this.shuffleArray(this.arrayCards);
    //this.separateArrays(this.arrayCards);
    console.log('Array: ' +this.arrayCards[0]+','+this.arrayCards[1]+','+this.arrayCards[2]+','+this.arrayCards[3]);
  }
  canExit(): boolean | Observable<boolean> | Promise<boolean>{
    if(this.korte === false){
      return confirm('Do you wanna go?');;
    } else{
    return true;
  }
  };

  caseOne(): any{
    this.wonMoney=0;
    this.lostMoney=0;
    this.currentMoney+=this.won100;
    const asd= Math.random() < 0.5;
    this.wonMoney+=this.won100;
    if(asd === true){
      this.currentMoney-=this.lost250;
      this.lostMoney-=this.lost250;
      return 'lost250';
      //console.log(this.arrayCards);
  }
  return 'won100';
}
  caseTwo(): any{
    this.wonMoney=0;
    this.lostMoney=0;
    this.currentMoney+=this.won50;
    const randomMoney= Math.random() < 0.5;
    this.wonMoney+=this.won50;
    if(randomMoney === true){
      this.currentMoney-=this.lost50;
      this.lostMoney-=this.lost50;
      return 'lost50';
    }
    return 'won50';

  }

  whichCardAdd(card: string, moneyValue: string){
    switch(card){
      case 'A':
        if(moneyValue === 'lost250'){
          this.valueA-=250;
        } else if(moneyValue === 'won100'){
          this.valueA+=100;
        } else if(moneyValue === 'lost50'){
          this.valueA-=50;
        } else if(moneyValue === 'won50'){
          this.valueA+=50;
        }
        break;
      case 'B':
        if(moneyValue === 'lost250'){
          this.valueB-=250;
        } else if(moneyValue === 'won100'){
          this.valueB+=100;
        } else if(moneyValue === 'lost50'){
          this.valueB-=50;
        } else if(moneyValue === 'won50'){
          this.valueB+=50;
        }
        break;
      case 'C':
        if(moneyValue === 'lost250'){
          this.valueC-=250;
        } else if(moneyValue === 'won100'){
          this.valueC+=100;
        } else if(moneyValue === 'lost50'){
          this.valueC-=50;
        } else if(moneyValue === 'won50'){
          this.valueC+=50;
        }
        break;
      case 'D':
        if(moneyValue === 'lost250'){
          this.valueD-=250;
        } else if(moneyValue === 'won100'){
          this.valueD+=100;
        } else if(moneyValue === 'lost50'){
          this.valueD-=50;
        } else if(moneyValue === 'won50'){
          this.valueD+=50;
        }
        break;
    }
  }
  whichisTheMostValueable(){
    const a = this.valueA;
    const b = this.valueB;
    const c = this.valueC;
    const d = this.valueD;

    return Math.max(a, b, c, d);
  }
  startbtnhide(){
    this.showstartbtn=!this.showstartbtn;
  }

  clickie(){
    this.korte=!this.korte;
    //this.modalService.setMessage('Almaaaa');
  }

  dialog(){
    this.modalService.presentModal();
    //this.enable=!this.enable;
  }
  gameEnd(){
      //this.endquestion.showAlertAsd();
      //this.dialog();
      this.enable=true;
      this.clickie();
      this.hidewhileend = !this.hidewhileend;
  }

  clickieCard(whichyouclicked: string){
    this.clickCount++;

    if(this.clickCount === 15){
      this.gameEnd();
    }
    this.cardClicked=!this.cardClicked;
    //console.log('Kartya klikkelve'+this.cardClicked);
    if(whichyouclicked === this.arrayCards[0]){
      //console.log('Elso: ' +this.arrayCards[0]+','+this.arrayCards[1]);
      this.caseOne();
      this.whichCardAdd(whichyouclicked,this.caseOne());
    }
    else if(whichyouclicked === this.arrayCards[1]){
      this.caseOne();
      this.whichCardAdd(whichyouclicked,this.caseOne());
    }
    else if(whichyouclicked === this.arrayCards[2]){
      //console.log('Masodik: ' +this.arrayCards[0]+','+this.arrayCards[1]);
      this.caseTwo();
      this.whichCardAdd(whichyouclicked,this.caseTwo());
    }
    else if(whichyouclicked === this.arrayCards[3]){
      this.caseTwo();
      this.whichCardAdd(whichyouclicked,this.caseTwo());

    }

  }

  shuffleArray(array: any) {
    console.log('Elotte: '+array);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    //console.log('Utana: '+array);
}





/*separateArrays(array: any){
  const one = array.pop();
  const two = array.pop();
  this.arrayTwo.push(one);
  this.arrayTwo.push(two);
  console.log('Popokutan:'+this.arrayTwo+', '+this.arrayCards);


}*/


}