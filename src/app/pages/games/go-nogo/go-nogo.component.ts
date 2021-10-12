import { Exit } from './../../../shared/guards/exitgame.guard';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResultService } from './../../../services/result.service';
import { Observable } from 'rxjs';
import { AttachSession } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-go-nogo',
  templateUrl: './go-nogo.component.html',
  styleUrls: ['./go-nogo.component.scss'],
})
export class GoNogoComponent implements OnInit, Exit ,OnDestroy{

  click = '../../../../assets/pictures/112.jpg';
  dontclick ='../../../../assets/pictures/111.jpg';
  clickNow= false;
  startdate: any;
  starttime: any;
  clicked = false;
  startttttt=false;
  times = [];
  average= [0];
  lastElement: any;
  beforelastElement: any;
  avg: any;
  showstartbtn=false;
  korte = true;
  clickcount = 0;
  detectclick= false;
  rnd: any;
  mimi=0;
  mimi2 =0;
  variable: any;
  variable2: any;
  variable3: any;

  constructor(private resService: ResultService) { }

  ngOnInit() {
    this.clickNow = Math.random() < 0.5;
  }
  canExit(): boolean | Observable<boolean> | Promise<boolean>{
    if(this.korte === false){
      return confirm('Do you wanna go?');;
    } else{
    return true;
  }
  };


  startbtnhide(){
    this.showstartbtn=!this.showstartbtn;
      this.variable = setInterval(() =>{
        this.clickNow=false;
        this.mimi2=0;
        this.variable3=setInterval(() =>{
          this.clickNow=true;
          if (++this.mimi === 1) {
            window.clearInterval(this.variable3);
        }
        },500);
        //this.clickNow=3;
        //this.rnd= Math.random() < 0.7;
        /*if(this.rnd === true){
          this.green();
        }
        else{
          this.red();
        }*/
        if (++this.mimi === 5) {
            window.clearInterval(this.variable);
            this.endGame();
        }
      }, 2000); //repeat every 2s
  }

  green(){
    //this.clickNow=true;
  }

  red(){
    //this.clickNow=false;
  }

  endGame(){
    this.korte=true;
    this.resService.presentModal();
  }

  starttt(){
    this.korte=!this.korte;
    this.startdate =new Date();
    this.starttime =this.startdate.getTime();
    this.times.push(this.starttime);
    console.log(this.times);
    this.rnd= Math.random() < 0.7;
    if(this.rnd === true){
      this.green();
    }
    else{
      this.red();
    }
  }


  valamihathajo(){
        //this.green();
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        document.getElementById('green').style.display ='none'; //displaying the button again after 3000ms or 3 seconds*/
        setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          document.getElementById('green').style.display ='inline'; //displaying the button again after 3000ms or 3 seconds
        },2000);

  }
  stopInterval(){
    clearInterval(this.variable);
  }



  myFunction()
  {
    console.log('asd');
    setInterval(() => {
      document.getElementById('green').style.display ='none'; //displaying the button again after 3000ms or 3 seconds
    },2000);
      setTimeout(() => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  console.log('most');
    document.getElementById('green').style.display ='inline'; //displaying the button again after 3000ms or 3 seconds*/
  },1000);
  }



  timeTracking(){
    this.starttime=0;
    this.startdate=0;
    this.startdate =new Date();
    this.starttime =this.startdate.getTime();
    this.times.push(this.starttime);
    this.lastElement = this.times[this.times.length - 1];
    this.beforelastElement = this.times[this.times.length - 2];
    this.avg= this.lastElement - this.beforelastElement;
    this.average.push(this.avg);
    console.log('Average: '+this.average);
  }


  clickEvent(){
      /*this.detectclick=true;
      this.clickcount++;
      if(this.clickcount > 10){
       this.endGame();
      }

      this.timeTracking();

      const rnd= Math.random() < 0.7;
      if(rnd === true){
        this.green();
      }
      else{
        this.red();
      }
      console.log('times: '+this.times);*/
      if(this.rnd === true){
        this.timeTracking();
      } else if(this.rnd===false){
        console.log('NEEEEEEEEEMSZABAAD');
      }
    }

  //}

  ngOnDestroy() {

  }
}
