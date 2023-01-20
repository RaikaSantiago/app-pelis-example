import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from 'src/app/models/cartelera.model';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies:MovieModel[];
  swiper:any;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){

    this.swiper = new Swiper('.swiper-container', {
     
      loop: true,

    });

    
  }

  onMovie(pelicula:MovieModel){
    this.router.navigate(['/pelicula',pelicula.id]);
  }

  onSlidePrev(){
    this.swiper.slidePrev();
  }

  onSlideNext(){
    this.swiper.slideNext();
  }
}
