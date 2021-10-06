import { Exit } from './../shared/guards/exitgame.guard';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmexitService implements Exit{

  asd: any;
  constructor() { }

  canExit(): boolean | Observable<boolean> | Promise<boolean>{
    if(this.asd){
      return confirm('Do you wanna go?');;
    } else{
    return true;
  }
  };
}
