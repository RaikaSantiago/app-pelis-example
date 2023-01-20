import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenerosModel } from 'src/app/models/generos.model';
import { GenreModel } from 'src/app/models/pelicula.model';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  generos:GenreModel[] = [];

  constructor(private router: Router,
              private peliculasService: PeliculasService) { }

  ngOnInit() {

    this.peliculasService.getGeneros().subscribe( gen =>{
      
      this.generos = gen;
    })
  }

  buscarPelicula(texto:string){
    
    
    texto = texto.trim();

    if ( texto.length === 0) {
      return;
    }

    this.router.navigate(['/buscar',texto]);
   
  }

}
