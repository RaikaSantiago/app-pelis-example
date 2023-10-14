import { SwiperOptions } from "swiper";

export interface SwiperServiceType {
    reconstruir(params: SwiperOptions): void;
    onSlidePrev(): void;
    onSlideNext(): void;
}