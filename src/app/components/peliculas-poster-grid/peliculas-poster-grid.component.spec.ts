import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PeliculasPosterGridComponent } from "./peliculas-poster-grid.component";

describe("PeliculasPosterGridComponent", () => {
  let component: PeliculasPosterGridComponent;
  let fixture: ComponentFixture<PeliculasPosterGridComponent>;
  // let myService: MyService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeliculasPosterGridComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      // providers: [{ provide: MyService, useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasPosterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // myService = TestBed.inject(MyService);
  });

  it('should created component', () => {
    expect(component).toBeTruthy();
  });

})