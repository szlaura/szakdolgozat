import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { list } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


export class WCST {
  time: any;
  right: any;
  wrong: any;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: Observable<WCST[]> = null;
  userid: any;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private afs: AngularFirestore ) {
    this.afAuth.authState.subscribe(user => {
      if(user) {this.userid = user.uid;}
    });
   }

   async add(collectionName: string, data: any, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

   getItemList(): any{
    if(!this.userid) {return;}
    //this.items = this.db.list(`items/${this.userid}`);
    return this.items;
   }
}
