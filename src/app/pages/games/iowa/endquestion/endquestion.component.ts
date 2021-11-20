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

    if(this.maxValues==='A' && this.valueA === this.valueSelected){
      this.rightAnswer = !this.rightAnswer;
    }
    else if(this.maxValues==='B' && this.valueB === this.valueSelected){
      this.rightAnswer = !this.rightAnswer;
    }
    else if(this.maxValues ==='C' && this.valueC === this.valueSelected){
      this.rightAnswer = !this.rightAnswer;
    }
    else if(this.maxValues ==='D' && this.valueD === this.valueSelected){
      this.rightAnswer = !this.rightAnswer;
    }
  }

}
