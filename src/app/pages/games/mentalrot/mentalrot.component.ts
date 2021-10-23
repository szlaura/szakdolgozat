import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';
import { Exit } from './../../../shared/guards/exitgame.guard';
import { ResultService } from './../../../services/result.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-mentalrot',
  templateUrl: './mentalrot.component.html',
  styleUrls: ['./mentalrot.component.scss'],
})
export class MentalrotComponent implements OnInit, Exit {

  ishidden = true;
  korte=true;
  aa: string;
  bb: string;
  st: any;
  nd: any;
  date: any;
  gameTime: any;
  variable1='alak1';
  variable2='alak2';
  variable3='alak3';
  cases = ['1', '2', '3'];
  choos = this.randomRepeats(this.cases);
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    maincard = <HTMLInputElement> document.getElementById('main');
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    leftcard = <HTMLInputElement> document.getElementById('left');
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    rightcard = <HTMLInputElement> document.getElementById('right');

  constructor() { }

  ngOnInit() {
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
    console.log('Time'+this.gameTime);
  }

  right(){
    alert('Helyeees');
    //this.choos();
  }

  wrong(){
    alert('Helyteleeen');
    //this.choos();
  }
  random(list: any){
     return list[Math.floor((Math.random()*list.length))];
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

  solution(){
     const rnd = this.random(this.cases);
     //const rnd = this.randomRepeats(this.cases);
     console.log(rnd);
     switch(rnd){
       case '1':
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
       case '2':
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
       case '3':
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

  randomRepeats(array: string[]) {
    let copy = array.slice(0);

    return function() {
      if (copy.length < 1) {
        console.log('Elfogyott');
        this.endtimer();
        /*this.modalService.setData({name:'wcst', data:this.right, data2: this.wrong, data3:this.gameTime});
        this.dataService.addWCST(this.right, this.wrong, this.gameTime, this.date);
        this.modalService.presentModal();*/
        copy = array.slice(0);}
      const index = Math.floor(Math.random() * copy.length);
      const item = copy[index];
      copy.splice(index, 1);
      console.log(item);
      //this.variable1=item;
      //this.hanynaltart++;
      return item;
    };
  }
}
