import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import AppSettings from 'src/app/app-settings/app-settings';
import Habit, { HabitState } from 'src/app/model/habit';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent {

  name: String = "";
  description: String = "";
  tracking: number = 0;

  private _habit: Habit = {id: 0, name: "", description: "", tracking: 0};

  get habit(): Habit {
    return this._habit;
  }

  @Input()
  set habit(value: Habit) {
    this._habit = value;
    this.name = value.name;
    this.description = value.description;
    this.tracking = value.tracking;
  }

  state: HabitState = HabitState.Display;

  @Output()
  deleteHabit = new EventEmitter<number>();

  constructor(private _http: HttpClient) {}

  enterDisplay() {
    this.state = HabitState.Display;
  }

  enterEdit() {
    this.state = HabitState.Edit;
  }

  enterTracking() {
    this.state = HabitState.Tracking;
  }

  doTracking() {
    this._http.post(`${AppSettings.URL}/${this._habit.id}/track`, { tracking: this.tracking }).subscribe({
      next: _ => {
        this.habit.tracking = this.tracking;
        this.enterDisplay();
      },
      error: err => alert(err.message)
    });
  }

  doEdit() {
    this._http.put(`${AppSettings.URL}/${this._habit.id}`, { name: this.name, description: this.description }).subscribe({
      next: _ => {
        this.habit.name = this.name;
        this.habit.description = this.description;
        this.enterDisplay()
      },
      error: err => alert(err.message)
    });
  }

  doDelete() {
    this._http.delete(`${AppSettings.URL}/${this.habit.id}`).subscribe({
      next: _ => this.deleteHabit.emit(this.habit.id),
      error: err => alert(err.message)
    });
  }

  cancel() {
    this.name = this.habit.name;
    this.description = this.habit.description;
    this.tracking = this.habit.tracking;
    this.state = HabitState.Display;
  }
}
