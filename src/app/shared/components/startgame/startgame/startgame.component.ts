import { StartnavService } from './../../../../services/startnav.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startgame',
  templateUrl: './startgame.component.html',
  styleUrls: ['./startgame.component.scss'],
})
export class StartgameComponent implements OnInit {

  ishidden = true;
  adat1: string;
  adat2: string;
  adat0: string;


  constructor(private startservice: StartnavService) {}

  ngOnInit() {
    this.adat0 = this.startservice.getTitle();
    this.adat1 = this.startservice.getDescription();
    this.adat2 = this.startservice.getRules();
  }

  close(){
    this.startservice.closeModal();
  }



}
