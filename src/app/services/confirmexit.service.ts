import { AlertController } from '@ionic/angular';
import { Exit } from './../shared/guards/exitgame.guard';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmexitService{

  asd: any;
  bool: any;
  constructor(private alertCtrl: AlertController) { }

  async presentConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
           this.bool = false;
           return this.bool;
          }
        },
        {
          text: 'Buy',
          handler: () => {
            this.bool= true;
            return this.bool;
          }
        }
      ]
    });
    alert.present();
    return this.bool;
  }
}
