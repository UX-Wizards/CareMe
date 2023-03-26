import { Component, OnInit } from '@angular/core';

declare const gtag: Function;

@Component({
  selector: 'app-routine-home',
  templateUrl: './routine-home.page.html',
  styleUrls: ['./routine-home.page.scss'],
})
export class RoutineHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickDay() {
    gtag('event', 'select_content', {item_id: 'routine_clicked_day'})
  }

  onClickNight() {
    gtag('event', 'select_content', {item_id: 'routine_clicked_night'})
  }
}
