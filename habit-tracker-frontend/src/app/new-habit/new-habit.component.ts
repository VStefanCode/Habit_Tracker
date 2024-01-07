import { Component, EventEmitter, Output } from '@angular/core';
import Habit from '../model/habit';
import { AddHabitState } from '../model/add-habit';

@Component({
  selector: 'app-new-habit',
  templateUrl: './new-habit.component.html',
  styleUrls: ['./new-habit.component.css']
})
export class NewHabitComponent {
  name: String = "";
  description: String = "";

  state = AddHabitState.Default;

  @Output()
  addHabit = new EventEmitter<Habit>();

  add() {
    this.addHabit.emit({id: 0, name: this.name, description: this.description, tracking: 0});
    this.cancel();
  }

  enterAdd() {
    this.state = AddHabitState.Add;
  }

  cancel() {
    this.name = "";
    this.description = "";
    this.state = AddHabitState.Default;
  }
}
