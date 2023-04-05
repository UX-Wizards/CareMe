import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, IonModal } from '@ionic/angular';
import { AnalyticsService } from '../analytics.service';
import { LocalStorageService, UserData } from '../storage.service';

@Component({
  selector: 'app-routine-home',
  templateUrl: './routine-home.page.html',
  styleUrls: ['./routine-home.page.scss'],
})
export class RoutineHomePage implements OnInit {
  @ViewChild(IonModal) modal?: IonModal

  day_night_select: string = 'night'

  data: UserData

  constructor(private toastController: ToastController) {
    this.data = LocalStorageService.getUserData()
  }

  ngOnInit() {
    this.data = LocalStorageService.getUserData()
  }

  onClickDay() {
    AnalyticsService.Tag('routine_clicked_day')
  }

  onClickNight() {
    AnalyticsService.Tag('routine_clicked_night')
  }

  onSave(new_data: UserData) {
    this.data.routine_goal = new_data.routine_goal
    this.data.day_routines = [...new_data.day_routines]
    this.data.night_routines = [...new_data.night_routines]
    LocalStorageService.saveUserData(this.data)
    AnalyticsService.Tag('routine_save')
    this.modal?.dismiss()
  }

  onCancel() {
    this.modal?.dismiss()
  }
}
