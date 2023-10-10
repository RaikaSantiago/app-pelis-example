import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from 'src/app/models/cartelera.model';
import { SwiperService } from 'src/app/services/util/swiper.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: MovieModel[];

  constructor(public router: Router, public swiperService: SwiperService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.swiperService.reconstruir({
      loop: true,
    })
  }

  onMovie(pelicula: MovieModel) {
    this.router.navigate(['/pelicula', pelicula.id]);
  }


}
