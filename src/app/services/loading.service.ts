import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingCtrl: LoadingController) { }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'myspinner',
      message: 'Loading...',
      duration: 500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

}
