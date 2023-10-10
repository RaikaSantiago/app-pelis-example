import { Injectable } from '@angular/core';
import Swiper from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class SwiperService {

  swiper: Swiper;

  constructor() { }
  
  /**
   * Construye la instancia Swiper
   * @param params 
   * @returns 
   */
  public reconstruir(params: any){
    this.swiper = new Swiper('.swiper-container', params);
  }

  public onSlidePrev(){
    this.swiper.slidePrev();
  }

  public onSlideNext(){
    this.swiper.slideNext();
  }
}
