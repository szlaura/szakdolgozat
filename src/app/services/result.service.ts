import { ResultComponent } from './../shared/components/result/result.component';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
export class Results {
  correct: string;
}


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private messageSource: BehaviorSubject<{data: number; data2: number; data3: any}>
  = new BehaviorSubject<{data: number; data2: number; data3: any}>({data: 0, data2: 0, data3: 0});

  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ResultComponent,
      cssClass: 'my-custom-class',
      backdropDismiss: false
    });
    return await modal.present();
  }

  setMessage(obj: any) {
    return this.messageSource.next(obj ? obj : {data:0, data2: 0, data3: 0});
  }

  getMessage(): Observable<{data: number; data2: number; data3: any}> {
    return this.messageSource.asObservable();
  }

}
