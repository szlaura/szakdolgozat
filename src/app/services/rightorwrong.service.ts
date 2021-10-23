import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RightorwrongService {

  someTime = 1000;

  constructor(private alertCtrl: AlertController) { }

  async showAlert(text: string, url: string) {
    const alert = await this.alertCtrl.create({
      cssClass : 'alert',
      header: text ,
      message: url,
      backdropDismiss: false
    });
    await alert.present();
    setTimeout(()=>{
      alert.dismiss();
  }, this.someTime);

  };


}
