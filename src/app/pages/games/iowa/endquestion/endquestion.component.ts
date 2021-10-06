import { ResultService } from './../../../../services/result.service';
import { ResmodalComponent } from './resmodal/resmodal.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-endquestion',
  templateUrl: './endquestion.component.html',
  styleUrls: ['./endquestion.component.scss'],
})
export class EndquestionComponent implements OnInit {

@ViewChild(ResmodalComponent) resModal: any;

  @Input() valueA: any;
  @Input() valueB: any;
  @Input() valueC: any;
  @Input() valueD: any;
  @Input() maxValues: any;

  valueSelected: string;

  answer: any = {

  };

  ans: any;


  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  chboxA = <HTMLInputElement> document.getElementById('A');
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  chboxB = <HTMLInputElement> document.getElementById('B');
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  chboxC = <HTMLInputElement> document.getElementById('C');
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  chboxD = <HTMLInputElement> document.getElementById('chboxD');
  clickedA = false;
  clickedB = false;
  clickedC = false;
  clickedD = false;
  value: any;


  constructor(public resService: ResultService) { }

  ngOnInit(): void {}

  resShow(){
    this.resModal.presentAlert();
  }

  check(){
   if(this.valueA === this.maxValues){
      console.log('A: '+this.valueA);
    }
    if(this.valueB === this.maxValues){
      console.log('B: '+this.valueB);
    }
    if(this.valueC === this.maxValues){
      console.log('C: '+this.valueC);
    }
    if(this.valueC === this.maxValues){
      console.log('D: '+this.valueD);
    }
  }

  valueHandler(event: any){
    console.log('event');
    /*if(this.valueA === this.maxValues){
      console.log('A: '+this.valueA);
    }
    if(this.valueB === this.maxValues){
      console.log('B: '+this.valueB);
    }
    if(this.valueC === this.maxValues){
      console.log('C: '+this.valueC);
    }
    if(this.valueC === this.maxValues){
      console.log('D: '+this.valueD);
    }*/
  }



}
