import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';

Swiper.use([Pagination]);

@Component({
  selector: 'app-mini-me',
  templateUrl: './mini-me.page.html',
  styleUrls: ['./mini-me.page.scss'],
})
export class MiniMePage implements OnInit {
  config: SwiperOptions = {
    pagination: true,
    allowTouchMove: true
  };

  constructor() { }

  ngOnInit() {
  }

}
