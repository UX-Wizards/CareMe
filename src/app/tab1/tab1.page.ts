import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { LocalStorageService, UserData } from '../storage.service';
import { AnalyticsService } from '../analytics.service';

const MS_IN_DAY: number = 24 * 60 * 60 * 1000

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: UserData

  constructor(private navCtrl: NavController) {
    this.data = LocalStorageService.getUserData()
  }

  ngOnInit() {
    this.data = LocalStorageService.getUserData()
  }

  ionViewWillEnter() {
    this.data = LocalStorageService.getUserData()
    this.updateJourneyCounter(new Date())
    AnalyticsService.Tag('journey_page_load')
  }

  // TODO: In theory, this should be run any time you open the app, not this view/tab
  updateJourneyCounter(now: Date) {
    now.setHours(0)
    now.setMinutes(0)
    now.setSeconds(0)
    now.setMilliseconds(0)
    let nowMillis = now.getTime()
    let lastMillis = this.data.last_completion_date_epoch_ms
    if (!lastMillis) {
      this.data.last_completion_date_epoch_ms = nowMillis
      LocalStorageService.saveUserData(this.data)
    }

    if (nowMillis - lastMillis == MS_IN_DAY * 2) {
      this.data.day_streak = 0
      this.data.day_routines.forEach(x => x.is_done = false)
      this.data.night_routines.forEach(x => x.is_done = false)
      this.data.last_completion_date_epoch_ms = nowMillis
      LocalStorageService.saveUserData(this.data)
    } else if (nowMillis - lastMillis == MS_IN_DAY) {
      const checkedRoutines = [...this.data.day_routines, ...this.data.night_routines].filter(x => x.is_done)
      if (checkedRoutines.length > 0) {
        this.data.day_streak += 1
      }

      this.data.total_routines += checkedRoutines.length

      this.data.day_routines.forEach(x => x.is_done = false)
      this.data.night_routines.forEach(x => x.is_done = false)

      this.data.last_completion_date_epoch_ms = nowMillis
      LocalStorageService.saveUserData(this.data)
    }
  }

  goToMiniMe() {
    this.navCtrl.navigateRoot('mini-me')
  }

}
