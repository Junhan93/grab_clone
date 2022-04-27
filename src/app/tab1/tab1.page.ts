import { Component } from '@angular/core';
import SwiperCore, { EffectFade, Swiper } from 'swiper';

SwiperCore.use([EffectFade]);
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

}
