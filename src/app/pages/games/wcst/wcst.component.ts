import { Exit } from './../../../shared/guards/exitgame.guard';
import { RigthorwrongComponent } from './modal/rigthorwrong/rigthorwrong.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultService } from './../../../services/result.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wcst',
  templateUrl: './wcst.component.html',
  styleUrls: ['./wcst.component.scss']
})
export class WcstComponent implements OnInit, Exit{

  @ViewChild(RigthorwrongComponent) rightorwrong: any;

  cards = ['111', '112', '113', '114', '121', '122', '123', '124', '131', '132', '133', '134', '141', '142', '143', '144'];
  //'211', '212', '213', '214', '221', '222', '223', '224', '231', '232', '233', '234', '241', '242', '243', '244',
  //'311', '312', '313', '314', '321', '322', '323', '324', '331', '332', '333', '334', '341', '342', '343', '344',
  //'411', '412', '413', '414', '421', '422', '423', '424', '431', '432', '433', '434', '441', '442', '443', '444'];
  array= [0,1,2];
  gyujto=[1,2,3];
  kulonkartya: any;
  variable='111';
  variable2='222';
  variable3='334';
  variable4='443';
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  randomkartya = <HTMLInputElement> document.getElementById('btn');
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  kartya1 = <HTMLInputElement> document.getElementById('111');
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  kartya2 = <HTMLInputElement> document.getElementById('222');
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  kartya3 = <HTMLInputElement> document.getElementById('334');
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  kartya4 = <HTMLInputElement> document.getElementById('443');
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  content = <HTMLInputElement> document.getElementById('content');
  //whichcase=1;
  szamok: any;
  right=0;
  wrong=0;
  count=0;
  counter: any;
  choos = this.randomNoRepeats(this.cards);
  hanynaltart=0;
  valtasutanrossz=0;
  alma: any;
  korte=true;
  clicked=false;
  ishidden = true;
  randomnumber: any;
  kinti: any;
  interval: any;
  gameTIme: any;
  st: any;
  nd: any;

  //time = this.currntTime.getHours() + ':' + this.currntTime.getMinutes() + ':' + this.currntTime.getSeconds();


  constructor(public modalService: ResultService) { }


  ngOnInit() {
    this.kulonkartya='111';
    this.counter=Math.floor(Math.random() * 3);
    this.randomnumber = Math.floor(Math.random() * (5 - 3 + 1)) + 3;

  }

/*public shakethecards(){
    const random = Math.floor(Math.random() * this.months.length);
    for (let i = 0; i < this.months.length; i++) {
      this.kulonkartya=this.months[random];
    }
    console.log(this.kulonkartya);
}*/

canExit(): boolean | Observable<boolean> | Promise<boolean>{
  if(this.korte === false){
    return confirm('Do you wanna go?');
  } else{
  return true;
}
};


starttimer(){
  const startTime = new Date();
  this.st=startTime;
}

endtimer(){
  const endTime = new Date();
  this.nd=endTime;
}

countTime(){
  //const gameTime= this.nd-this.st;
  //return gameTime;
  this.gameTIme = this.nd-this.st;
  console.log(this.gameTIme);
}

randomNoRepeats(array: any) {
  const copy = array.slice(0);
  this.kinti=copy; //holnapra
  return function() {
    if (copy.length < 1) {
      console.log('Elfogyott');
      this.modalService.presentModal();
      this.endtimer();
      this.countTime();
      return 0;
      /*copy = array.slice(0);*/ }
    const index = Math.floor(Math.random() * copy.length);
    const item = copy[index];
    copy.splice(index, 1);
    console.log(item);
    this.kulonkartya=item;

    this.hanynaltart++;

    return item;
  };
}


public jovalasz(){
  //alert('Jo a valasz');
  this.rightorwrong.showAlert('Jo valasz', `<img src="../../../../assets/pictures/rightanswer.png">`);
  this.choos();
}

public rosszvalasz(){
  //alert('Rossz a valasz');
  this.rightorwrong.showAlert('Rossz valasz', `<img src="../../../../assets/pictures/wronganswer.png">`);
  this.choos();
}

chooseByNumber(event: string): void {
  console.log('Szam szerint nezem'+event);
  if(event.charAt(0) === this.kulonkartya.charAt(0)){
    this.jovalasz();
    this.countRight();

  }
  else{
    this.rosszvalasz();
    this.countWrong();
  }
}

chooseByColor(event: string): void {
  console.log('Szin szerint nezem'+event);
  if(event.charAt(2) === this.kulonkartya.charAt(2)){
    this.jovalasz();
    this.countRight();

  }
  else{
    this.rosszvalasz();
    this.countWrong();
  }
}
chooseByShape(event: string): void {
  console.log('Shape szerint nezem'+event);
  if(event.charAt(1) === this.kulonkartya.charAt(1)){
    this.jovalasz();
    this.countRight();
  }
  else{
    this.rosszvalasz();
    this.countWrong();
  }
}

clickCount(){
  this.count++;
  console.log('Klikk szama: '+this.count);
  if (this.count === this.randomnumber){
    this.count=0;
    this.counter=Math.floor(Math.random() * 3);
    console.log('Random szam:  '+this.randomnumber);
  }
  return this.counter;
}

public chooseEset(event2: string){
  console.log('Counter erteke:'+this.counter);

 const whichcase = this.counter;

  switch(whichcase) {
    case 0: //szam alapjan
      //console.log('Kivalaszottam a szin szerinti caset'+event2);
      this.chooseByNumber(event2);
      break;
    case 1: //szin alapjan
      this.chooseByColor(event2);
      break;
    case 2: //forma alapjan
      this.chooseByShape(event2);
      break;
  }
}

hanyatNyomottrosszul(){
  this.alma = this.wrong;
}

countRight(){
  this.right++;
  console.log('Jo valasz: '+this.right);
}

countWrong(){
  this.wrong++;
  console.log('Rossz valasz: '+this.wrong);
}

clickie(){
  this.korte=!this.korte;
}

randomEset(array: any) {
  const copy = array.slice(0);
  return function() {
    if (copy.length < 1) {
      this.copy = array.slice(0);
    }
    const index = Math.floor(Math.random() * copy.length);
    const item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

}
