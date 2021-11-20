import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

  authState: any = null;
  anon: any;

    constructor(private afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe( authState => {
        this.authState = authState;
      });
    }

    async logout(): Promise<void> {
        await this.afAuth.signOut();
    }

    login(email: string, password: string): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }

    createUser(email: string, password: string): Promise<any> {
      const ret = this.afAuth.createUserWithEmailAndPassword(email, password);
      return ret;
    }

    authenticated(): boolean {
      return this.afAuth.authState !== null;
    }

    currentUserObservable(): any {
        return this.afAuth.authState;
    }

    signinAsAGuest(): Promise<any>{
      return this.afAuth.signInAnonymously();
    }

    get currentUserId(): string {
      return this.authenticated ? this.authState.uid : null;
    }

    get currentUserEmail(): string {
      return this.authenticated ? this.authState.email : null;
    }


    isAnonymus(add: string){
      if(add==='anon'){
        this.anon = true;
      } else {
        this.anon = false;
      }
    }

    getifAnonymus(){
      return this.anon;
    }

}

