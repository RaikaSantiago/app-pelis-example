import { TestBed } from '@angular/core/testing';

import { SwiperService } from './swiper.service';

describe('SwiperService', () => {
  let service: SwiperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiperService);
    const params = {}; // Your Swiper configuration
    // Call the reconstruir method
    service.reconstruir(params);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('should initialize Swiper', () => {
    const params = {}; // Your Swiper configuration

    // Call the reconstruir method
    service.reconstruir(params);
    
    // Expect that the swiper property is defined
    expect(service.swiper).toBeDefined();
  });

  it('should call slidePrev() on onSlidePrev() method', () => {
    spyOn(service.swiper, 'slidePrev');
    service.onSlidePrev();
    expect(service.swiper.slidePrev).toHaveBeenCalled();
  });

  it('should call slideNext() on onSlideNext() method', () => {
    spyOn(service.swiper, 'slideNext');
    service.onSlideNext();
    expect(service.swiper.slideNext).toHaveBeenCalled();
  });
});
