import { Component, OnInit, ViewChild } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { SwiperComponent } from "swiper/angular";
import { NavController } from "@ionic/angular";

Swiper.use([Pagination])

@Component({
  selector: 'app-mini-me',
  templateUrl: './mini-me.page.html',
  styleUrls: ['./mini-me.page.scss'],
})
export class MiniMePage implements OnInit {
  config: SwiperOptions = {
    pagination: true,
    allowTouchMove: false
  }
  @ViewChild('swiper') swiper?: SwiperComponent
  currentIndex?: number

  constructor(private navController: NavController,) { }

  ngOnInit() {
  }

  slideNext() {
    this.swiper?.swiperRef.slideNext(200)
    this.currentIndex = this.swiper?.swiperRef.activeIndex
  }

  slidePrev() {
    this.swiper?.swiperRef.slidePrev(200)
    this.currentIndex = this.swiper?.swiperRef.activeIndex
  }

}
