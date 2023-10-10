import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/models/cartelera.model';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  movies:MovieModel[] = [];
  valorBuscado:string = '';
  loading:boolean;
  error:boolean;
  errorMensaje: any;
  result:boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.searchParams();
  }

  public searchParams(){
    this.activatedRoute.params.subscribe(resp=>{
      this.loading = true;
      this.error = false;
      this.valorBuscado = resp.texto;
      this.getSearchFilms(this.valorBuscado);
    })
  }

  private getSearchFilms(dataSearch: string){
    this.peliculasService.buscarPeliculas(dataSearch).subscribe(resp =>{
      this.loading = false;
      
      if (resp.length > 0) {
        this.result = false;
        this.movies = resp;
      }else{
        this.result = true;
        this.movies = [];
      }
      
    }, (err) => {
       
      this.loading = false;
      this.error = true;
      this.errorMensaje = err.error.error.message;
    })
  } 

}
