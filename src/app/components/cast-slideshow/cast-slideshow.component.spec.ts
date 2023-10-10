import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CastSlideshowComponent } from "./cast-slideshow.component";

describe("CastSlideshowComponent", () => {
  let component: CastSlideshowComponent;
  let fixture: ComponentFixture<CastSlideshowComponent>;
  let LIST_CAST_DEFAULT = [{
    "adult": false,
    "gender": 2,
    "id": 2037,
    "known_for_department": "Acting",
    "name": "Cillian Murphy",
    "original_name": "Cillian Murphy",
    "popularity": 65.803,
    "profile_path": "/llkbyWKwpfowZ6C8peBjIV9jj99.jpg",
    "cast_id": 3,
    "character": "J. Robert Oppenheimer",
    "credit_id": "613a940d9653f60043e380df",
    "order": 0
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CastSlideshowComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CastSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should start the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one element to display ', () => {
    component.cast = LIST_CAST_DEFAULT;
    const lengthCast = component.cast.length;
    let passTest: boolean = false;

    if (lengthCast > 0) {
      passTest = true;
    }
    expect(passTest).toBeTrue();
  });


})