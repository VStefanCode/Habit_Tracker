import { Component, OnInit } from '@angular/core';
import Habit from './model/habit';
import { HttpClient } from '@angular/common/http';
import AppSettings from './app-settings/app-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  habits: Habit[] = [];

  constructor(private _http: HttpClient) {}

  deleteHabit(id: number) {
    this.habits = this.habits.filter(h => h.id != id);
  }

  ngOnInit(): void {
    this.fetchHabits();
  }

  addHabit(habit: Habit) {
    this._http.post(AppSettings.URL, habit).subscribe({
      next: _ => this.fetchHabits(),
      error: err => alert(err.message),
    })
  }

  private fetchHabits() {
    this._http.get<Habit[]>(AppSettings.URL).subscribe(data => {
      this.habits = data;
    })
  }
}
