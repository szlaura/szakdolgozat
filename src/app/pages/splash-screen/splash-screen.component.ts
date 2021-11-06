import { Router } from '@angular/router';
import { LoadingService } from './../../services/loading.service';
import { AuthService } from 'src/app/services/auth.service';
import { StartgameComponent } from './../../shared/components/startgame/startgame/startgame.component';
import { StartnavService } from './../../services/startnav.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { stringify } from 'querystring';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit{

  title: string;
  descript: string;
  rule: string;
  iduser: any;

  constructor(private introService: StartnavService, private modal: ModalController, private service: AuthService, private router: Router) {
    this.router.onSameUrlNavigation='reload';
    this.iduser = this.service.currentUserId;

  }
  ngOnInit(): void {
  }

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

      case 'mentalrotation':
        this.title= 'Mental Rotation Feladat';
        this.descript = 'A mentális forgatási készségeid próbálhatod ki a játékkal. A képek közül az egyik megegyezik a minta képpel.'+
        'De vajon melyik? A játék 10 percet vesz igénybe.';
        this.rule = 'A minden körben új képet fogsz látni, mely alatt további két új jelenik meg. A bekeretezett kép és az egyik alsó kép'+
         'megegyezik. Válaszd ki, hogy melyik a párja. A játék 10 percet vesz igénybe.';
        break;

      case 'bart':
        this.title= 'Ballon Analog Risk Feladat';
        this.descript = 'A játékban egy lufit kell felfújnod, minden növelésért 5 dollárt kapsz.'+
        'De vigyázz! Ha túl nagyra növeled, kidurran a lufi és elveszted az addig gyűjtött pénzt.'+
        'Azonban, ha jókor hagyod abba, be tudod tenni a bankba a gyűjtött pénzed. A játék 10 percet vesz igénybe.';
        this.rule = 'Minden körben saját belátásod szerint növeld a lufit, és ha úgy gondolod, eleget növelted,'+
        ' tedd be a bankba a pénzed, ahol biztonságban lesz, onnan nem tudod elveszíteni. Azonban, ha kidurran a lufi'+
        ', az abban a körben gyűjtött pénzed elveszik.';
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
