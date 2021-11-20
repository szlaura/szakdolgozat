import { StartgameComponent } from './../shared/components/startgame/startgame/startgame.component';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StartnavService {

  title: string;
  description: string;
  rules: string;

  constructor(public modalCtrl: ModalController) { }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: StartgameComponent,
      //cssClass: 'my-custom-class',
      backdropDismiss: false
    });
    return await modal.present();
  }

  public setDescription(titl: string, desc: string, rul: string){
    this.title = titl;
    this.description = desc;
    this.rules = rul;
  }

  getTitle(){
    return this.title;
  }
  getDescription(){
    return this.description;
  }

  getRules(){
    return this.rules;
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }


}
