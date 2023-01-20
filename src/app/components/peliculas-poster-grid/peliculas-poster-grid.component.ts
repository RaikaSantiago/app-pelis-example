import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from 'src/app/models/cartelera.model';


@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies:MovieModel[];
  constructor(private router: Router) { }

  ngOnInit(): void {

    
  }

  onMovie(pelicula:MovieModel){
    this.router.navigate(['/pelicula',pelicula.id]);
  }

}
