import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UserData } from 'src/app/storage.service';

class RoutineSingleton {
  singleton: string = ''
}

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

  night_routines: Array<RoutineSingleton> = [{singleton: ''}]
  day_routines: Array<RoutineSingleton> = [{singleton: ''}]
  routine_goal: string = ""

  shadow_data: UserData = new UserData() // Use this to move routine data

  constructor() { }

  ngAfterViewInit() {
    this.routine_goal = this.data.routine_goal

    if (this.data.night_routines.length == 0) {
      this.night_routines = [{singleton: ''}]
    } else {
      this.night_routines = this.data.night_routines.map(x => <RoutineSingleton>{singleton: x})
    }

    if (this.data.day_routines.length == 0) {
      this.day_routines = [{singleton: ''}]
    } else {
      this.day_routines = this.data.day_routines.map(x => <RoutineSingleton>{singleton: x})
    }
  }

  onCancel() {
    this.cancelChanges.emit()
  }

  onSave() {
    this.shadow_data.night_routines = this.night_routines.map(x => x.singleton).filter(x => x != '')
    this.shadow_data.day_routines = this.day_routines.map(x => x.singleton)
    this.shadow_data.routine_goal = this.routine_goal
    this.saveChanges.emit(this.shadow_data)
  }

  addRoutine() {
    if (this.day_night_select == 'night') {
      this.night_routines.push({singleton: ''})
    } else {
      this.day_routines.push({singleton: ''})
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
