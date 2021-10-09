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
    case 'wcst':
      this.title= 'Wisconsin Card Sorting Feladat';
      this.descript = 'A feladatot kártyákkal játsszák. Négy kártya közül kell kiválasztanod, hogy melyik lehet az alsó kártya párja.'+
            'A teszt 10-20 percet vesz igénybe.';
      this.rule = 'Minden körben csak egy helyes válasz van. A szabályra neked kell rájönni. \n'+
      'Minden körben visszajelzést kapsz, hogy jól választottál-e.';
      break;
    case 'iowa':
      this.title= 'IOWA Gambling Feladat';
      this.descript = 'Négy pakli kártyából kell választani egyet minden körben. Minden pakliban'+
      'vannak kártyák, amelyekkel pénzt nyerhetsz vagy vagy veszíthetsz. A játék célja, hogy minél több pénzt nyerj.'+
      ' A teszt 10-20 percet vesz igénybe.';
      this.rule = 'Minden körben válassz egy paklit, amellyel szerinted a legtöbbet nyerheted.';
      break;

      case 'gonogo':
        this.title= 'Go/Go-go Feladat';
        this.descript = 'Felvillanó képekre kell kattintani, azonban bizonyos szabályokat be kell hozzá tartani.'+
        ' A gyorsaságodra és a figyelmedre is szükséged lesz, A játék 10 percet vesz igénybe.';
        this.rule = 'Nyomd meg a képernyőt/jobb egérgombot, amikor a zöld kép jelenik meg. Ne nyomj meg semmit, ha a fekete jelenik meg';
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
