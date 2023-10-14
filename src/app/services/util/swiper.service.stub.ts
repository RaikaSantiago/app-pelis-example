import Swiper, { SwiperOptions } from "swiper";
import { SwiperServiceType } from "./swiper.service.type";

export class SwiperServiceStub implements SwiperServiceType {

    swiper: Swiper;

    public reconstruir(params: SwiperOptions): void {
        this.swiper = new Swiper('.swiper-container', params);
    }

    public onSlidePrev(): void {
        this.swiper.slidePrev();
    }

    public onSlideNext(): void {
        this.swiper.slideNext();
    }

}