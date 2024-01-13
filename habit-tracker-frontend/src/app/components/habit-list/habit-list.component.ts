import { Component, OnInit } from '@angular/core';
import Habit from 'src/app/model/habit';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {
  habits: Habit[] = [];

  constructor(private _habitService: HabitService) { }

  ngOnInit(): void {
    this._habitService.habits.subscribe(data => this.habits = data);
    this._habitService.fetchHabits().subscribe({error: err => alert(err.message)});
  }
}
