import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  constructor(private alertCtrl: AlertController) { }

}
