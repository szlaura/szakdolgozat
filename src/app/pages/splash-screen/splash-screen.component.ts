import { StartgameComponent } from './../../shared/components/startgame/startgame/startgame.component';
import { StartnavService } from './../../services/startnav.service';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { stringify } from 'querystring';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {

  title: string;
  descript: string;
  rule: string;

  constructor(public introService: StartnavService, public modal: ModalController) {}

  openIntro(){
    this.introService.presentModal();
  }

  sendDesc(id: string){
  switch(id){
    case 'iowa':
      this.title= 'IOWA Gambling';
      this.descript = 'Asddd IOWA gameeeee';
      this.rule = 'Iowaaa rulzzz';
      break;
      case 'wcst':
        this.title= 'Wisconsin Card Sorting Game';
        this.descript = 'WCST gameeeee';
        this.rule = 'WCSTTTTTT rulzzz';
        //console.log('KULDEEES');
        break;
  }
  this.sendValue(this.title, this.descript, this.rule);
}

  sendValue(titlooo: string,desooo: string,rulezzz: string ){
    //desooo=this.descript;
    //rulezzz=this.rule;
    this.introService.setDescription(titlooo, desooo, rulezzz);
  }


}
