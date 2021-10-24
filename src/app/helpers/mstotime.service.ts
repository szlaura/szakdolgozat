import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MstotimeService {
  h: any;
  m: any;
  s: any;

  constructor() { }

  msToTime(duration: any) {
    const milliseconds = Math.floor((duration % 1000) / 100);
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    this.h = (hours < 10) ? '0' + hours : hours;
    this.m = (minutes < 10) ? '0' + minutes : minutes;
    this.s = (seconds < 10) ? '0' + seconds : seconds;

    return  minutes + ' p ' + seconds + ' mp ' + milliseconds + ' ms';
  }
}
