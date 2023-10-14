import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { PeliculasService } from 'src/app/services/peliculas.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

fdescribe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let peliculasService: PeliculasService;
  let LIST_FILMS_CARTELERA: any = [
    {
      "adult": false,
      "backdrop_path": "/cHNqobjzfLj88lpIYqkZpecwQEC.jpg",
      "genre_ids": [
        28,
        53,
        80,
        18
      ],
      "id": 926393,
      "original_language": "en",
      "original_title": "The Equalizer 3",
      "overview": "Desde que renunció a su vida como asesino del gobierno, Robert McCall (Denzel Washington) ha luchado para reconciliarse con las cosas horribles que ha hecho en el pasado y encuentra un extraño consuelo en hacer justicia en nombre de los oprimidos. Mientras se encuentra en su casa en el sur de Italia, descubre que sus nuevos amigos están bajo el control de los jefes del crimen local. A medida que los acontecimientos comienzan a complicarse, McCall entiende lo que tiene que hacer: convertirse en el protector de sus amigos enfrentándose a la temida mafia.",
      "popularity": 3060.765,
      "poster_path": "/eJKmexmCLwuxOxlAURSMnBVkfmY.jpg",
      "release_date": "2023-08-30",
      "title": "The Equalizer 3",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 715
    }, {
      "adult": false,
      "backdrop_path": "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 1008042,
      "original_language": "en",
      "original_title": "Talk to Me",
      "overview": "La solitaria adolescente Mia se engancha a la emoción de invocar espíritus utilizando una mano embalsamada, pero cuando se enfrenta a un alma que dice ser su madre muerta, desata una plaga de fuerzas sobrenaturales y se debate entre decidir en quién puede confiar: en los vivos o en los muertos.",
      "popularity": 2639.157,
      "poster_path": "/rS8fjd6dYcf64v3ZhAE6fKrxoaF.jpg",
      "release_date": "2023-07-26",
      "title": "Háblame",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 1276
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        PeliculasService
      ],
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    peliculasService = TestBed.inject(PeliculasService);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should load movies from the service', () => {
    // Se espia el servicio y se retorna el mock de la lista 
    spyOn(peliculasService,'getCartelera').and.returnValue(of(LIST_FILMS_CARTELERA));
    // Llama al método que quieres probar
    component.ngOnInit();
    // Asegúrate de que el estado se actualice correctamente
    expect(peliculasService.getCartelera).toHaveBeenCalled();
    expect(component.loading).toBe(false);
    expect(component.movies).toEqual(LIST_FILMS_CARTELERA);
    expect(component.moviesSlideShow).toEqual(LIST_FILMS_CARTELERA);
  });

  it('should call getCartelera() when scroll position is greater than max scroll', () => {
    // Espiar el método getCartelera()
    const spy = spyOn(peliculasService, 'getCartelera').and.returnValue(of(LIST_FILMS_CARTELERA));
    peliculasService.cargando = false;
    // Simular el evento de desplazamiento
    window.scrollTo(0, document.documentElement.scrollHeight);

    // Llamar al método scrollEventListener()
    component.scrollEventListener();

    // Esperar que el método getCartelera() se haya llamado una vez
    expect(spy).toHaveBeenCalledOnceWith();
  });

  it('should not call getCartelera() when scroll position is less than max scroll', () => {
    // Espiar el método getCartelera()
    const spy = spyOn(peliculasService, 'getCartelera');

    // Simular el evento de desplazamiento
    window.scrollTo(0, 100);

    // Llamar al método scrollEventListener()
    component.scrollEventListener();

    // Esperar que el método getCartelera() no haya sido llamado
    expect(spy).not.toHaveBeenCalled();
  });
  
  it('should call service resetCarteleraPage in cicle life ngOnDestroy ', () => {
    spyOn(peliculasService,'resetCarteleraPage');
    // Llama al método que quieres probar
    component.ngOnDestroy();
    // Asegúrate de que el estado se actualice correctamente
    expect(peliculasService.resetCarteleraPage).toHaveBeenCalled();
  });

})