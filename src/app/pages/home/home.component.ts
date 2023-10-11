import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/cartelera.model';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: MovieModel[] = [];
  public moviesSlideShow: MovieModel[] = [];
  loading: boolean = true;

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.scrollEventListener();
  }

  constructor(private peliculasService: PeliculasService) { }

  async ngOnInit() {
    this.getConsultCartelera();
  }

  public getConsultCartelera() {
    this.peliculasService.getCartelera().subscribe(resp => {
      this.loading = false;
      this.movies = resp;
      this.moviesSlideShow = resp;
      console.log(resp);
      
      // this.peliculasService.agregarPeliculaConVotos(resp);
    });
  }

  public scrollEventListener() {
    const posScroll = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const maxScroll = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if (posScroll > maxScroll) {
      if (this.peliculasService.cargando) { return; }
      this.peliculasService.getCartelera().subscribe(resp => {
        this.movies.push(...resp)
      });
    }
  }


  ngOnDestroy() {
    this.peliculasService.resetCarteleraPage();
  }

}
