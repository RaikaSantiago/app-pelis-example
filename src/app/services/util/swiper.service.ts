import { Injectable } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { SwiperServiceType } from './swiper.service.type';

@Injectable({
  providedIn: 'root'
})
export class SwiperService implements SwiperServiceType {

  swiper: Swiper;

  constructor() { }

  /**
   * Construye la instancia Swiper
   * @param params 
   * @returns 
   */
  public reconstruir(params: SwiperOptions) {
    this.swiper = new Swiper('.swiper-container', params);
  }

  public onSlidePrev() {
    this.swiper.slidePrev();
  }

  public onSlideNext() {
    this.swiper.slideNext();
  }
}
