import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenreModel } from 'src/app/models/pelicula.model';
import { PeliculasService } from 'src/app/services/peliculas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public generos: GenreModel[] = [];
  public URL_HOME: string = "/home";
  public URL_SEARCH: string = "/buscar";

  constructor(public router: Router,
    private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.getListGeneros();
  }

  public getListGeneros(){
    try {
      this.peliculasService.getGeneros().subscribe(gen => {
        this.generos = gen;
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al obtener la lista de géneros!'+ error,
      });
    }
    
  }

  buscarPelicula(texto: string) {
    texto = texto.trim();
    if (texto.length === 0) {
      this.router.navigateByUrl(this.URL_HOME);
      return;
    }
    this.router.navigate([this.URL_SEARCH, texto]);
  }

}
