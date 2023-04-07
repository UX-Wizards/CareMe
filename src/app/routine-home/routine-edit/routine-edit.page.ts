import { Component, Output, EventEmitter, Input } from '@angular/core';
import { RoutineElement, UserData } from 'src/app/storage.service';

@Component({
  selector: 'app-routine-edit',
  templateUrl: './routine-edit.page.html',
  styleUrls: ['./routine-edit.page.scss'],
})
export class RoutineEditPage {
  @Input() data: UserData = new UserData()
  @Output() cancelChanges = new EventEmitter<any>()
  @Output() saveChanges = new EventEmitter<any>()

  day_night_select: string = "night"

  night_routines: Array<RoutineElement> = [{label: '', is_done: false}]
  day_routines: Array<RoutineElement> = [{label: '', is_done: false}]
  routine_goal: string = ""

  shadow_data: UserData = new UserData() // Use this to move routine data

  constructor() { }

  ngAfterViewInit() {
    this.routine_goal = this.data.routine_goal

    if (this.data.night_routines.length == 0) {
      this.night_routines = [{label: '', is_done: false}]
    } else {
      this.night_routines = this.data.night_routines.map(x => x)
    }

    if (this.data.day_routines.length == 0) {
      this.day_routines = [{label: '', is_done: false}]
    } else {
      this.day_routines = this.data.day_routines.map(x => x)
    }
  }

  onCancel() {
    this.cancelChanges.emit()
  }

  onSave() {
    this.shadow_data.night_routines = this.night_routines.filter(x => x.label != '')
    this.shadow_data.day_routines = this.day_routines.filter(x => x.label != '')
    this.shadow_data.routine_goal = this.routine_goal
    this.saveChanges.emit(this.shadow_data)
  }

  addRoutine() {
    if (this.day_night_select == 'night') {
      this.night_routines.push({label: '', is_done: false})
    } else {
      this.day_routines.push({label: '', is_done: false})
    }
  }

  deleteRoutine(i: number) {
    if (this.day_night_select == 'night') {
      this.night_routines.splice(i, 1)
    } else {
      this.day_routines.splice(i, 1)
    }
  }

}
