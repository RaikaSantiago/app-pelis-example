
import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { NavbarComponent } from "./navbar.component";
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { BuscarComponent } from 'src/app/pages/buscar/buscar.component';
import { PeliculasService } from '../../services/peliculas.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { GenreModel } from "src/app/models/pelicula.model";
import Swal from "sweetalert2";
import { of, throwError } from "rxjs";

describe("NavbarComponent", () => {
  let service: PeliculasService;
  let httpMock: HttpTestingController;
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let TEXT_SEARCH: string = "Monja";
  let routerTest: Router;
  let URL_HOME: string = '/home';
  let URL_SEARCH: string = '/buscar';
  let LIST_DEFAULT_GENEROS_MOVIE: GenreModel[] = [
    {
      "id": 28,
      "name": "Acción"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 16,
      "name": "Animación"
    },
  ]

  afterEach(() => {
    // httpMock.verify(); // Verificar que no haya solicitudes HTTP pendientes
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        PeliculasService
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            { path: 'home', component: HomeComponent },
            { path: 'buscar/:texto', component: BuscarComponent }
          ]
        ),
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    routerTest = fixture.componentInstance.router;
    service = TestBed.inject(PeliculasService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should start the componente Navbar', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the home page when the text is empty', () => {
    const spy = spyOn(routerTest, 'navigateByUrl');
    // Llamamos al método que queremos probar
    component.buscarPelicula('');

    routerTest.navigateByUrl(URL_HOME);

    // Verificamos que el componente navegue a la página de inicio
    expect(spy).toHaveBeenCalledWith(URL_HOME);
  });

  it('should navigate to the search page when the text is not empty', () => {
    const spy = spyOn(routerTest, 'navigate');
    // Llamamos al método que queremos probar
    component.buscarPelicula(TEXT_SEARCH);
    // Verificamos que el componente navegue a la página de búsqueda
    expect(spy).toHaveBeenCalledWith([URL_SEARCH, TEXT_SEARCH]);
  });

  it(' should get list generos', fakeAsync(() => {
    spyOn(service, 'getGeneros').and.returnValue(of(LIST_DEFAULT_GENEROS_MOVIE)); // Espiar el método getGeneros y devolver un observable simulado
    
    service.getGeneros().subscribe((generos) => {
      expect(generos).toEqual(LIST_DEFAULT_GENEROS_MOVIE); // Comprobar si los géneros devueltos coinciden con los datos de prueba
    });
    tick();
  }));
  

  it('should request get and method http', () => {
    const request = httpMock.expectOne(`${service.baseUrl}/genre/movie/list?api_key=8cb12934c3712ccdd03f2c8ef4bf18cc&language=es-Es&page=1`);
    expect(request.request.method).toBe('GET');// Comprobar que se hizo una solicitud GET

    // Simular la respuesta del servidor con los datos de prueba
    request.flush(LIST_DEFAULT_GENEROS_MOVIE);
  
  });

  it('should handle error from the server', fakeAsync(() => {
    const errorMessage = 'Error en el servidor';
    // Simular un error
    spyOn(service, 'getGeneros').and.returnValue(throwError(errorMessage)); // Espiar el método getGeneros y lanzar un error simulado

    // const spy = spyOn(Swal, 'fire').and.callThrough(); // Espiar el método Swal.fire

    // console.log(spy);
    
    service.getGeneros().toPromise().then(() => {
      fail('La promesa no debería tener éxito en caso de error');
    }).catch((error) => {
      expect(error).toBe(errorMessage); // Comprobar que el error coincide con el mensaje de error simulado
      // expect(spy).toHaveBeenCalled(); // Comprobar que Swal.fire se haya llamado en caso de error
    });
    
    tick();
  }));

})


