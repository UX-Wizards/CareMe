import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-mini-me-builder',
  templateUrl: './mini-me-builder.page.html',
  styleUrls: ['./mini-me-builder.page.scss'],
})
export class MiniMeBuilderPage implements OnInit {
  @ViewChild('menu') swiperMenu?: SwiperComponent
  @ViewChild('selections') swiperSelection?: SwiperComponent
  @Output() nextSlide = new EventEmitter<any>()
  menuConfig: SwiperOptions = {
    slidesPerView: 4,
    centeredSlides: true
  }
  selectionConfig: SwiperOptions = {
    pagination: false
  }
  swiper: any
  currentIndex?: number

  constructor() { }

  ngOnInit() {
  }

  onSwiper(swiper: any) {
    this.currentIndex = swiper.realIndex
  }

  slideNext() {
    this.nextSlide.emit()
  }

  slideTo(i: number) {
    this.swiperMenu?.swiperRef.slideTo(i)
    this.currentIndex = this.swiperMenu?.swiperRef.activeIndex
  }

  onMenuIndexChange() {
    this.currentIndex = this.swiperMenu?.swiperRef.activeIndex
    this.slideToSelection(this.swiperMenu?.swiperRef.activeIndex)
  }

  onSelectionIndexChange() {
    this.currentIndex = this.swiperSelection?.swiperRef.activeIndex
    this.slideToMenu(this.swiperSelection?.swiperRef.activeIndex)
  }

  slideToSelection(i: any) {
    this.swiperSelection?.swiperRef.slideTo(i);
    this.currentIndex = this.swiperMenu?.swiperRef.activeIndex
  }

  slideToMenu(i: any) {
    this.swiperMenu?.swiperRef.slideTo(i);
    this.currentIndex = this.swiperSelection?.swiperRef.activeIndex
  }

}
