import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  constructor() { }

  playAudio(audiosrc: string){
    const audio = new Audio();
    audio.src = audiosrc;
    audio.load();
    audio.play();
  }

}
