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

  private messageSource: BehaviorSubject<{name: string; data: number; data2?: any; data3?: any}>
  = new BehaviorSubject<{name: string; data: number; data2?: any; data3?: any}>({name: '', data: 0, data2: 0, data3: 0});

  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ResultComponent,
      cssClass: 'my-custom-class',
      backdropDismiss: false
    });
    return await modal.present();
  }

  setData(obj: any) {
    return this.messageSource.next(obj ? obj : {name:'', data:0, data2: 0, data3: 0});
  }

  getData(): Observable<{name: string; data: number; data2?: number; data3?: any}> {
    return this.messageSource.asObservable();
  }

}
