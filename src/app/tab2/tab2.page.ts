import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  slidesConfig = {
    slidesPreview : 0.5,
    spaceBetween : 35,
    centeredSlides : true,
    autoplay : true
  };

}
