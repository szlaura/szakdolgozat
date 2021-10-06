import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-confirmexit',
  templateUrl: './confirmexit.component.html',
  styleUrls: ['./confirmexit.component.scss'],
})
export class ConfirmexitComponent{

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Figyelmeztetés',
      message: 'Ha elhagyja az oldalt, a megkezdett teszt elveszik. Biztos benne?',
      buttons: [
        {
            text: 'Ok',
            /*handler: () => {
                alert.dismiss(true);
                return false;
            }*/
        }, {
            text: 'Mégse',
            /*handler: () => {
                alert.dismiss(false);
                return false;
            }*/
        }
    ]
    });
    await alert.present();
  }

}
