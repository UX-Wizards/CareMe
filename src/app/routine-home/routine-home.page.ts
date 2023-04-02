import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AnalyticsService } from '../analytics.service';
import { LocalStorageService, UserData } from '../storage.service';

@Component({
  selector: 'app-routine-home',
  templateUrl: './routine-home.page.html',
  styleUrls: ['./routine-home.page.scss'],
})
export class RoutineHomePage implements OnInit {
  goals: string = ""

  data: UserData

  constructor(private toastController: ToastController) {
    this.data = LocalStorageService.getUserData()
  }

  ngOnInit() {
    this.data = LocalStorageService.getUserData()
    this.goals = this.data.routine_goal
  }

  onClickDay() {
    AnalyticsService.Tag('routine_clicked_day')
  }

  onClickNight() {
    AnalyticsService.Tag('routine_clicked_night')
  }

  onSave() {
    this.data.routine_goal = this.goals
    LocalStorageService.saveUserData(this.data)
    AnalyticsService.Tag('routine_save')
    this.showConfirmationToast()
  }

  async showConfirmationToast() {
    const toast = await this.toastController.create({
      message: 'Content saved',
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }
}
