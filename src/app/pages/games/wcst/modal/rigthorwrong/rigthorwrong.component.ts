import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rigthorwrong',
  templateUrl: './rigthorwrong.component.html',
  styleUrls: ['./rigthorwrong.component.scss']
})
export class RigthorwrongComponent implements OnInit {

  someTime = 1000;

  constructor(private alertCtrl: AlertController) { }

  ngOnInit(): void {
  }

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
