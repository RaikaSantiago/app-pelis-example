import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SlideshowComponent } from "./slideshow.component";
import { RouterTestingModule } from '@angular/router/testing';
import { PeliculaComponent } from 'src/app/pages/pelicula/pelicula.component';
import { Router } from "@angular/router";
import { MovieModel, OriginalLanguageModel } from "src/app/models/cartelera.model";

describe("SlideshowComponent", () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;
  let routerTest: Router;
  let URL_SEARCH: string = '/pelicula';
  let DEFAULT_JSON_MOVIE: MovieModel = {
    "adult": false,
    "backdrop_path": "/cHNqobjzfLj88lpIYqkZpecwQEC.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 926393,
    "original_language": OriginalLanguageModel.En,
    "original_title": "The Equalizer 3",
    "overview": "Desde que renunció a su vida como asesino del gobierno, Robert McCall (Denzel Washington) ha luchado para reconciliarse con las cosas horribles que ha hecho en el pasado y encuentra un extraño consuelo en hacer justicia en nombre de los oprimidos. Mientras se encuentra en su casa en el sur de Italia, descubre que sus nuevos amigos están bajo el control de los jefes del crimen local. A medida que los acontecimientos comienzan a complicarse, McCall entiende lo que tiene que hacer: convertirse en el protector de sus amigos enfrentándose a la temida mafia.",
    "popularity": 2686.985,
    "poster_path": "/eJKmexmCLwuxOxlAURSMnBVkfmY.jpg",
    "title": "The Equalizer 3",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 570
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideshowComponent],
      imports: [
        RouterTestingModule.withRoutes(
          [
            { path: 'pelicula', component: PeliculaComponent },
          ]
        ),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    routerTest = fixture.componentInstance.router;
    fixture.detectChanges();
  });

  it('should start the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call method onMovie', () => {
    const spy = spyOn(routerTest, 'navigate');
    
    component.onMovie(DEFAULT_JSON_MOVIE);

    expect(spy).toHaveBeenCalledWith([URL_SEARCH, DEFAULT_JSON_MOVIE.id]);
  });  


})