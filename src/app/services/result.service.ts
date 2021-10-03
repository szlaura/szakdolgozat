import { ResultComponent } from './../shared/components/result/result.component';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
export class Results {
  correct: string;
}


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private messageSource = new Subject<string>();

  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ResultComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

 public getMessage(): Observable<string> {
    return this.messageSource.asObservable();
  }

  public setMessage(message: any) {
    return this.messageSource.next(message);
  }



}
