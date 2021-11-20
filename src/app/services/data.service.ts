import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { collection, addDoc, getFirestore} from 'firebase/firestore';
import { AngularFirestore, CollectionReference, Query} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  iduser: any;
  db = getFirestore();

  constructor(private service: AuthService, private afs: AngularFirestore) {
    this.iduser = this.service.currentUserId;
  }

  get(id: any, sort: any, dbname: string, order: string): Observable<any[]> {
    return this.afs.collection(dbname, ref => {
      let que: CollectionReference | Query = ref;
      que = que.orderBy(order, sort).where('usersid','==', id);
      console.log('que:'+que);
      return que;
    }).valueChanges() as Observable<any[]>;
  }

  async addWCST(good: number, bad: number, timee: number, datee: any){
    const ref = collection(this.db, 'wcst');

    await addDoc(
      ref, {
        usersid: this.iduser,
        right: good,
        wrong: bad,
        time: timee,
        date: datee
      }
    );

  }
  async addIOWA(mostclick: string, realmax: string, all: number, timee: number, datee: any){
    const ref = collection(this.db, 'iowa');

    await addDoc(
      ref, {
        usersid: this.iduser,
        mostclicked: mostclick,
        maxcard: realmax,
        allmoney: all,
        time: timee,
        date: datee
      }
    );
  }

  async addMentalrotation(good: number, bad: number, avgtimee: number,timee: number, dateee: any){
    const ref = collection(this.db, 'mentalrotation');

    await addDoc(
      ref, {
        usersid: this.iduser,
        right: good,
        wrong: bad,
        avgreacttime: avgtimee,
        time:timee,
        date: dateee
      }
    );
  }

  async addBART(won: number, lost: number, max: number, bank: number, timee: number, dateee: any){
    const ref = collection(this.db, 'bart');

    await addDoc(
      ref, {
        usersid: this.iduser,
        wontimes: won,
        losttimes: lost,
        maxwon: max,
        bankmoey: bank,
        time: timee,
        date: dateee,
      }
    );
  }

  async addUserData(nicknamee: string, birth: any, gender: string){
    const ref = collection(this.db, 'user');

    await addDoc(
      ref, {
        usersid: this.iduser,
        nickname: nicknamee,
        birthdate: birth,
        sex: gender
      }
    );
  }

  edit(item: any){
   const itemdoc = this.afs.doc(`user/VMcjkLAWCTKXwzriHP8C/`);
   itemdoc.update({sex: item});
    //const itemdoc = this.afs.collection('user');
    //itemdoc.doc(this.iduser).update({ 'nickname'+: 'asdsda' });
    //await this.afs.doc(`user/${this.iduser}/sex`).update({item});
  }

  /*updateDoc(_id: string, _value: string) {
    const doc = this.afs.collection('user/', ref => ref.where('id', '==', _id));
    doc.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.doc.data();
        const id = a.doc.id;
        return { id, data };
      }))).subscribe((_doc: any) => {
       const id = _doc[0].payload.doc.id; //first result of query [0]
       this.afs.doc(`user/${id}`).update({sex: _value});
      });
  }*/


}
