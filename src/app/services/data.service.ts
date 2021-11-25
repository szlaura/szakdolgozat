import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { collection, addDoc, getFirestore} from 'firebase/firestore';
import { AngularFirestore, CollectionReference, Query} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  errorMessage: string;
  iduser: any;
  db = getFirestore();

  constructor(private service: AuthService, private afs: AngularFirestore) {
    this.iduser = this.service.currentUserId;
  }


  get(id: any, sort: any, dbname: string, order: string): Observable<any[]> {
    try{
        return this.afs.collection(dbname, ref => {
        let que: CollectionReference | Query = ref;
        que = que.orderBy(order, sort).where('usersid','==', id);
        return que;
        }).valueChanges() as Observable<any[]>;

      } catch(error){
        this.errorMessage = 'Hiba történt az adatok lekérésekor!';
        alert(this.errorMessage);
      }
  }

  async addWCST(good: number, bad: number, timee: number, datee: any){
    try{
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
    } catch(error){
      this.errorMessage = 'Hiba történt az adatok rögzítésekor!';
      alert(this.errorMessage);
    }
  }

  async addIOWA(mostclick: string, realmax: string, all: number, timee: number, datee: any){
    try{
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
    } catch(error){
      this.errorMessage = 'Hiba történt az adatok rögzítésekor!';
      alert(this.errorMessage);
    }
  }

  async addMentalrotation(good: number, bad: number, avgtimee: number,timee: number, dateee: any){
    try{
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
    } catch(error){
      this.errorMessage = 'Hiba történt az adatok rögzítésekor!';
      alert(this.errorMessage);
    }
  }

  async addBART(won: number, lost: number, max: number, bank: number, timee: number, dateee: any){
    try{
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
    } catch(error){
      this.errorMessage = 'Hiba történt az adatok rögzítésekor!';
      alert(this.errorMessage);
    }
  }

  async addUserData(nicknamee: string, birth: any, gender: string){
    try{
      const ref = collection(this.db, 'user');

      await addDoc(
        ref, {
          usersid: this.iduser,
          nickname: nicknamee,
          birthdate: birth,
          sex: gender
        }
      );
    } catch(error){
      this.errorMessage = 'Hiba történt az adatok rögzítésekor!';
      alert(this.errorMessage);
    }
  }

}
