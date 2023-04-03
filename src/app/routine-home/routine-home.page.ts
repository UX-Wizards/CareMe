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

  onSave(goals: string) {
    this.data.routine_goal = goals
    LocalStorageService.saveUserData(this.data)
    AnalyticsService.Tag('routine_save')
    this.modal?.dismiss()
    this.showConfirmationToast()
  }

  async showConfirmationToast() {
    const toast = await this.toastController.create({
      message: 'Content saved',
      duration: 1500,
      position: 'bottom'
    });

    await toast.present()
  }

  onCancel() {
    this.modal?.dismiss()
  }
}
