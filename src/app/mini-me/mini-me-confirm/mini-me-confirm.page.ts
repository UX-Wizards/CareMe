import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-me-confirm',
  templateUrl: './mini-me-confirm.page.html',
  styleUrls: ['./mini-me-confirm.page.scss'],
})
export class MiniMeConfirmPage implements OnInit {
  @Input() imgUrl?: string;
  constructor() { }

  ngOnInit() {
  }

}
