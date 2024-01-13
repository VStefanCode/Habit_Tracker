import { Component, Input } from '@angular/core';
import Habit from 'src/app/model/habit';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent {
  @Input()
  habit = new Habit();

  edit() {

  }

  track() {
    
  }
}
