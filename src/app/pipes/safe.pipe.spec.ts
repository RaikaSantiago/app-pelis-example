import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';
import { TestBed } from '@angular/core/testing';

describe('SafePipe', () => {
  let url: DomSanitizer;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafePipe],
      providers: [
        DomSanitizer
      ]
    }).compileComponents();
  });

  it('create an instance', () => {
    const pipe = new SafePipe(url);
    expect(pipe).toBeTruthy();
  });
});
