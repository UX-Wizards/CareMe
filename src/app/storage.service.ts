import { Injectable } from '@angular/core'

const PROFILE_KEY = 'profile'

class MiniMe {

}

export class RoutineElement {
  label: string = ''
  is_done: boolean = false
}

export class UserData {
  // Everytime we bump the version number, we're going to flush the data
  version: number = 1
  night_routines: Array<RoutineElement> = []
  day_routines: Array<RoutineElement> = []
  routine_goal: string = ''
  day_streak: number = 0
  total_routines: number = 0
  last_completion_date_epoch_ms: number = 0
  minime: MiniMe = {}

  isEmpty(): boolean {
    return false
  }
}

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  public static saveUserData(value?: UserData) {
    if (value) {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(value))
    }
  }

  public static getUserData(): UserData {
    const data = localStorage.getItem(PROFILE_KEY)
    return data ? JSON.parse(data) : new UserData()
  }

  public static clearData() {
    localStorage.clear();
  }
}
