import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CastModel } from 'src/app/models/creditos.model';
import { PeliculaModel } from 'src/app/models/pelicula.model';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Result } from '../../models/trailer.models';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  
  pelicula:PeliculaModel;
  cast:CastModel[] = [];
  video:Result[] = [];
  loading:boolean;
  

  constructor(private activatedRoute: ActivatedRoute,
              private peliculasService:PeliculasService,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {

    this.loading = true;
    const {id} = this.activatedRoute.snapshot.params;

    // combineLatest : Permite estar atento de varios llamadados simultaneos agrupandolos en uno solo
      combineLatest([
        this.peliculasService.getPeliculaDetalle(id),
        this.peliculasService.getCast(id),
        this.peliculasService.getVideoTrailer(id)
      ]).subscribe(([pelicula,cast,video])=>{
        
        
        if(!pelicula && !cast){
          this.loading = false;
          this.router.navigateByUrl('/home')
          return;
        }
        // console.log(video);
        // console.log(pelicula);
        
        this.loading = false;
        this.pelicula = pelicula;
        this.cast = cast.filter( actor => actor.profile_path !== null);
        this.video = video;
      })  
    
      
  }



  onRegresar(){
    this.location.back();
  }

}
