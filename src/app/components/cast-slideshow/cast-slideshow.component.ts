import { Component, Input, OnInit } from '@angular/core';
import { CastModel } from 'src/app/models/creditos.model';
import { SwiperService } from 'src/app/services/util/swiper.service';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit {

  @Input() cast:CastModel[] = [];

  constructor(public swiperService: SwiperService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.swiperService.reconstruir({
      slidesPerView:5.3,
      freeMode:true,
      spaceBetween:15,
    })
  }

}
