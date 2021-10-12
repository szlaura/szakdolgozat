import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from '@angular/fire/compat/database';
import { collection, addDoc ,setDoc, getFirestore, getDocs, where, query, collectionGroup } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  iduser: any;
  db = getFirestore();
  wcstarray = [];
  constructor(private service: AuthService) {
    this.iduser = this.service.currentUserId;
  }

  async getWcst(array: any){
    const wcsts = query(collection(this.db, 'wcst'), where('usersid', '==', this.iduser));
    const quesrySnapshot = await getDocs(wcsts);
    quesrySnapshot.forEach((doc) => {
      // eslint-disable-next-line @typescript-eslint/quotes
      console.log(doc.id, " => ", doc.data());
      array.push(doc.data());
    });
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

  async addWCST(good: number, bad: number, timee: number){
    const ref = collection(this.db, 'wcst');

    const docRef = await addDoc(
      ref, {
        usersid: this.iduser,
        right: good,
        wrong: bad,
        time: timee
      }
    );

  }
  async addIOWA(won: number, lost: number,all: number, timee: number){
    const ref = collection(this.db, 'iowa');

    const docRef = await addDoc(
      ref, {
        usersid: this.iduser,
        wonmoney: won,
        lostmoney: lost,
        allmoney: all,
        time: timee
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
