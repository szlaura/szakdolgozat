import { ResultService } from './../../../../../services/result.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-resmodal',
  templateUrl: './resmodal.component.html',
  styleUrls: ['./resmodal.component.scss'],
})
export class ResmodalComponent implements OnInit {

  constructor(public alertController: AlertController, public service: ResultService) { }

  ngOnInit(): void {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {text:'OK',
        handler: () => {
          this.service.presentModal();
        }
      }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }



}
