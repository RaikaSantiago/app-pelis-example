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

  public pelicula: PeliculaModel;
  public cast: CastModel[] = [];
  public video: Result[] = [];
  public loading: boolean = true;


  constructor(private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location,
    private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.getConsultCombineLatest();
  }

  async getConsultCombineLatest() {
    const { id } = this.activatedRoute.snapshot.params;

    // combineLatest : Permite estar atento de varios llamadados simultaneos agrupandolos en uno solo
    await combineLatest([
      this.peliculasService.getPeliculaDetalle(id),
      this.peliculasService.getCast(id),
      this.peliculasService.getVideoTrailer(id)
    ]).toPromise().then(([pelicula, cast, video]) => {
      if (!pelicula && !cast) {
        this.router.navigateByUrl('/home')
        return;
      }
      if (video.length > 0) {
        this.video = video;
      }
      this.pelicula = pelicula;
      this.cast = cast.filter(actor => actor.profile_path !== null);
      
    }).finally(() => this.loading = false)
  }

  onRegresar() {
    this.location.back();
  }

}
