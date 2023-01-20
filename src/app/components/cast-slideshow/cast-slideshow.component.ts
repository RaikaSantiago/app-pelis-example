import { Component, Input, OnInit } from '@angular/core';
import { CastModel } from 'src/app/models/creditos.model';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit {

  @Input() cast:CastModel[];
  swiper:any;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){

    this.swiper = new Swiper('.swiper-container', {
      slidesPerView:5.3,
      freeMode:true,
      spaceBetween:15,

    });

    
  }

  onSlidePrev(){
    this.swiper.slidePrev();
  }

  onSlideNext(){
    this.swiper.slideNext();
  }
}
