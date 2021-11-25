import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StartnavService } from './../../services/startnav.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { Observable } from 'rxjs';

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
  user: Observable<User[]> | null = null;

  constructor(private introService: StartnavService, private service: AuthService, private router: Router) {
    this.router.onSameUrlNavigation='reload';
    this.iduser = this.service.currentUserId;
  }
  ngOnInit() {
  }

  openIntro(){
    this.introService.presentModal();
  }

  sendDesc(id: string){
  switch(id){
    case 'wcst':
      this.title= 'Wisconsin Card Sorting Feladat';
      this.descript = 'Ez egy neuropszichológiai teszt, amelyet gyakran használnak '+
      'olyan magasabb szintű kognitív folyamatok mérésére, mint a figyelem, a kitartás vagy az absztrakt gondolkodás.';
      this.rule = 'A feladatot kártyákkal játsszák. Négy kártya közül kell kiválasztanod, hogy melyik lehet az alsó kártya párja.'+
      'A teszt 10-20 percet vesz igénybe. Minden körben csak egy helyes válasz van. A szabályra neked kell rájönni. \n'+
      'Minden körben visszajelzést kapsz, hogy jól választottál-e.';
      break;
    case 'iowa':
      this.title= 'Iowa Gambling Feladat';
      this.descript = 'Az Iowa szerencsejáték feladat (IGT) egy pszichológiai feladat, amely szimulálni tudja a valós döntéshozatalt.'+
      ' Széles körben használják az észlelés és az érzékelés vizsgálatában.';
      this.rule = 'A 2000 $ tőkével indul a játék. Négy pakli kártyából kell választani egyet minden körben. Minden pakliban '+
      'vannak kártyák, amelyekkel pénzt nyerhetsz vagy veszíthetsz. A játék célja, hogy minél több pénzt begyűjts a váték végére.'+
      ' A teszt 10 percet vesz igénybe.';
      break;

      case 'mentalrotation':
        this.title= 'Mental Rotation Feladat';
        this.descript = 'A mentális rotáció készségeid próbálhatod ki a játékkal. A mentális rotáció azt jelenti, hogy elképzeljük,'+
        ' hogyan nézne ki egy objektum (pl. kép, tárgy, stb.), ha elforgatnák.'+
        ' Kapcsolat van az észleléssel és a mentális forgással kapcsolatos agyterületek között.'+
        ' Összefüggés lehet továbbá még a térbeli feldolgozás kognitív sebessége,'+
        ' az általános intelligencia és a mentális rotáció között is.';
        this.rule = 'A képek közül az egyik megegyezik a minta képpel.'+
        'De vajon melyik? A játék 10 percet vesz igénybe. A minden körben új képet fogsz látni,'+
        ' mely alatt további két új jelenik meg. A bekeretezett kép és az egyik alsó kép'+
         'megegyezik. Válaszd ki, hogy melyik a párja. A játék 10 percet vesz igénybe.';
        break;

      case 'bart':
        this.title= 'Ballon Analog Risk Feladat';
        this.descript = 'Ez a feladat a kockázatvállalási hajlandóságot méri. '+
         'Modellezi a valós kockázatvállalást a potenciális jutalom és veszteség között.';
        this.rule = 'A játékban egy lufit kell felfújnod, minden növelésért 5 dollárt kapsz.'+
        'De vigyázz! Ha túl nagyra növeled, kidurran a lufi és elveszted az addig gyűjtött pénzt.'+
        'Azonban, ha jókor hagyod abba, be tudod tenni a bankba a gyűjtött pénzed. Saját belátásod szerint dönts,'+
        ' hogy mikor teszed be a bankba a pénzed A játék 10 percet vesz igénybe.';
        break;
  }
  this.sendValue(this.title, this.descript, this.rule);
}

  sendValue(titl: string, des: string, rule: string ){
    this.introService.setDescription(titl, des, rule);
  }

}
