import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Habit from '../model/habit';
import AppSettings from '../app-settings/app-settings';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  habits = new BehaviorSubject<Habit[]>([])

  constructor(private _http: HttpClient) { }

  getHabit(habitId: number) {
    return this.habits.getValue().find(habit => habit.id == habitId);
  }

  fetchHabits() {
    return this._http.get<Habit[]>(AppSettings.URL).pipe(
      tap(data => this.habits.next(data))
      );
  }

  addHabit(habit: Habit) {
    return this._http.post(AppSettings.URL, habit).pipe(
      tap(_ => this.fetchHabits().subscribe())
    );
  }

  editHabit(habitId: number, name: String, description: String) {
    return this._http.put(`${AppSettings.URL}/${habitId}`, { name, description }).pipe(
      tap(_ => {
        let habits = this.habits.getValue();

        const habit = habits.find(habit => habit.id == habitId)!;

        habits = habits.filter(habit => habit.id != habitId);

        this.habits.next([...habits, {...habit, name, description}])
      })
      );
  }

  trackHabit(habitId: number, tracking: number) {
    return this._http.post(`${AppSettings.URL}/${habitId}/track`, { tracking }).pipe(
      tap(_ => {
        let habits = this.habits.getValue();

        const habit = habits.find(habit => habit.id == habitId)!;

        habits = habits.filter(habit => habit.id != habitId);

        this.habits.next([...habits, {...habit, tracking}])
      })
      );
  }

  deleteHabit(habitId: number) {
    return this._http.delete(`${AppSettings.URL}/${habitId}`).pipe(
      tap(_ => {
        const habits = this.habits.getValue().filter(habit => habit.id != habitId);

        this.habits.next(habits);
      })
    );
  }
}
