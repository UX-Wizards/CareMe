import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-routine-edit',
  templateUrl: './routine-edit.page.html',
  styleUrls: ['./routine-edit.page.scss'],
})
export class RoutineEditPage {
  @Input() data?: any
  @Output() cancelChanges = new EventEmitter<any>()
  @Output() saveChanges = new EventEmitter<any>()
  goals: string = ""

  constructor() { }

  ionViewDidEnter() {
    this.goals = this.data.routine_goal
  }

  onCancel() {
    this.cancelChanges.emit()
  }

  onSave() {
    this.saveChanges.emit(this.goals)
  }

}
