import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { collection, addDoc, getFirestore} from 'firebase/firestore';
import { AngularFirestore, CollectionReference, Query} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
//import { CollectionReference, Query } from '@angular/fire/firestore';

export interface WCST {
  right: number;
  wrong: number;
  usersid: string;
  time: number;
  date: any;
}
export interface IOWA {
  usersid: string;
  wonmoney: number;
  lostmoney: number;
  allmoney: number;
  time: number;
  date: any;

}

export interface GoNoGo {
  right: number;
  wrong: number;
  avgreacttime: number;
  usersid: string;
  date: any;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  iduser: any;
  db = getFirestore();
  //wcstarray = [];
  //asdarayy: Observable<any[]>;
  constructor(private service: AuthService, private afs: AngularFirestore) {
    this.iduser = this.service.currentUserId;
  }

  get(id: any, dbname: string, order: string): Observable<any[]> {
    return this.afs.collection(dbname, ref => {
      let que: CollectionReference | Query = ref;
      que = que.orderBy(order, 'desc').where('usersid','==', id);
      return que;
    }).valueChanges() as Observable<any[]>;
  }

  getItem(): Observable<WCST> {
    const collect = this.afs.collection<WCST>('wcst', ref => ref.where('usersid', '==', this.iduser));
    const userasd = collect
    .valueChanges()
    .pipe( map(users => {
        const user = users[0];
        console.log(user);
        return user;
      })
    );

  return userasd;
  }

  /*addResult(game: Game){
    this.gamesRef.push({
      user: game.user,
      time: game.time,
      right: game.right,
      wrong: game.wrong
    }).catch(error => {
      this.errorMgmt(error);
    });
  }*/

  /*add(asdd: any){
     push(ref(this.databaseRef, 'games-list'), asdd);
  }

  getGame(id: string) {
    this.gameRef = this.db.object('games-list/' + id);
    return this.gameRef;
  }

  /* Get book list */
  /*getGamesList() {
    this.gamesRef = this.db.list('games-list');
    return this.gamesRef;
  }

  private errorMgmt(error: any) {
    console.log(error);
  }*/

  async addWCST(good: number, bad: number, timee: number, datee: any){
    const ref = collection(this.db, 'wcst');

    const docRef = await addDoc(
      ref, {
        usersid: this.iduser,
        right: good,
        wrong: bad,
        time: timee,
        date: datee
      }
    );

  }
  async addIOWA(won: number, lost: number,all: number, timee: number, datee: any){
    const ref = collection(this.db, 'iowa');

    const docRef = await addDoc(
      ref, {
        usersid: this.iduser,
        wonmoney: won,
        lostmoney: lost,
        allmoney: all,
        time: timee,
        date: datee
      }
    );

  }

  async addGonogo(good: number, bad: number, timee: number){
    const ref = collection(this.db, 'go-nogo');

    const docRef = await addDoc(
      ref, {
        usersid: this.iduser,
        avgreacttime: good,
        goodclick: bad,
        wrongclick: timee
      }
    );

  }


}
