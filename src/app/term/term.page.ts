import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term',
  templateUrl: './term.page.html',
  styleUrls: ['./term.page.scss'],
})
export class TermPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    speed: 300,
    effect: 'flip',
  };

  constructor() { }

  ngOnInit() {
  }

}
