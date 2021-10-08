import { ResultService } from './../../../../services/result.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-endquestion',
  templateUrl: './endquestion.component.html',
  styleUrls: ['./endquestion.component.scss'],
})
export class EndquestionComponent implements OnInit {


  @Input() valueA: any;
  @Input() valueB: any;
  @Input() valueC: any;
  @Input() valueD: any;
  @Input() maxValues: any;

  valueSelected: any;
  isShown = false;
  rightAnswer= false;
  disableRadioBox=false;


  constructor(public resService: ResultService) { }

  ngOnInit(): void {}

  showResult(){
    this.resService.presentModal();
  }

  valueHandler(event: any){
    this.valueSelected = event;
  }

  check(){
    this.isShown = !this.isShown;
    this.disableRadioBox = !this.disableRadioBox;

   if(this.valueA === this.maxValues && this.valueA === this.valueSelected){
      console.log('A: '+this.valueA);
      this.rightAnswer = !this.rightAnswer;
    }
    else if(this.valueB === this.maxValues && this.valueB === this.valueSelected){
      console.log('B: '+this.valueB);
      this.rightAnswer = !this.rightAnswer;
    }
    else if(this.valueC === this.maxValues && this.valueC === this.valueSelected){
      console.log('C: '+this.valueC);
      this.rightAnswer = !this.rightAnswer;
    }
    else if(this.valueD === this.maxValues && this.valueD === this.valueSelected){
      console.log('D: '+this.valueD);
      this.rightAnswer = !this.rightAnswer;

    }
  }

}
