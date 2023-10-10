import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarteleraModel, MovieModel } from '../models/cartelera.model';
import { tap, map, catchError } from 'rxjs/operators';
import { PeliculaModel } from '../models/pelicula.model';
import { CastModel, CreditosModel } from '../models/creditos.model';
import { GenerosModel } from '../models/generos.model';
import { Result, VideoTrailerModel } from '../models/trailer.models';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { VotosModel } from '../models/votos.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private carteleraPage = 1;
  public baseUrl = 'https://api.themoviedb.org/3';
  public cargando: boolean = false;
  private itemsColletion: AngularFirestoreCollection<VotosModel>;
  public votos: VotosModel[] = [];

  constructor(private http: HttpClient,
    private afs: AngularFirestore,) {
    this.itemsColletion = this.afs.collection<VotosModel>('votos');

  }
  public get params() {
    return {
      api_key: '8cb12934c3712ccdd03f2c8ef4bf18cc',
      language: 'es-Es',
      page: this.carteleraPage.toString()
    };
  }

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getCartelera(): Observable<MovieModel[]> {

    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;
    return this.http.get<CarteleraModel>(`${this.baseUrl}/movie/now_playing`,
      { params: this.params }
    ).pipe(
      map((resp) => resp.results),
      tap(() => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    );
  }

  getGeneros() {
    return this.http.get<GenerosModel>(`${this.baseUrl}/genre/movie/list`, {
      params: this.params
    }).pipe(
      map(resp => resp.genres),
      catchError(err => of(null))
    )
  }

  cargarVotosPelis() {

    if (this.votos.length > 0) {

      return of(this.votos);
    } else {
      return this.itemsColletion.valueChanges().pipe(
        tap(votos => this.votos = votos)
      );
    }

  }

  votarPeli(data: VotosModel) {

    // return this.itemsColletion.doc(data.id).update(data);
  }

  agregarPeliculaConVotos(pelis: MovieModel[]) {

    for (const i in pelis) {

      let votos: VotosModel = {
        id: pelis[i].id,
        nombre: pelis[i].title,
        url: pelis[i].poster_path,
        votos: pelis[i].vote_count
      }

      this.votos.push(votos);
      this.itemsColletion.add(this.votos[i]);
    }

  }

  getVideoTrailer(id: string): Observable<Result[]> {
    const params = { ...this.params, lenguage: 'es-Es' };
    return this.http.get<VideoTrailerModel>(`${this.baseUrl}/movie/${id}/videos`, {
      params
    }).pipe(
      map(resp => resp.results),
      catchError(err => of(null))
    )

  }

  buscarPeliculas(query: string): Observable<MovieModel[]> {

    const params = { ...this.params, page: '1', lenguage: 'es-Es', query, include_adult: 'true' };

    return this.http.get<CarteleraModel>(`${this.baseUrl}/search/movie?`, {
      params
    }).pipe(
      map(resp => resp.results)
    );

  }

  getPeliculaDetalle(id: string) {

    return this.http.get<PeliculaModel>(`${this.baseUrl}/movie/${id}`, {
      params: this.params
    }).pipe(
      catchError(err => of(null))
    )
  }

  getCast(id: string): Observable<CastModel[]> {

    return this.http.get<CreditosModel>(`${this.baseUrl}/movie/${id}/credits`, {
      params: this.params
    }).pipe(
      map(resp => resp.cast),
      catchError(err => of(null)),

    )
  }

  // https://api.themoviedb.org/3/movie/632357?api_key=8cb12934c3712ccdd03f2c8ef4bf18cc&language=es-ES


}


