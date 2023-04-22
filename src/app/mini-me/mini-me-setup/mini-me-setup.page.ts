import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mini-me-setup',
  templateUrl: './mini-me-setup.page.html',
  styleUrls: ['./mini-me-setup.page.scss'],
})
export class MiniMeSetupPage implements OnInit {
  @Output() nextSlide = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

  slideNext() {
    this.nextSlide.emit()
  }

}
