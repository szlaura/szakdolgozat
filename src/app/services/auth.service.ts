import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private afAuth: AngularFireAuth) { }

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

    signinAsAGusedt(): Promise<any>{
      return this.afAuth.signInAnonymously();
    }

}
