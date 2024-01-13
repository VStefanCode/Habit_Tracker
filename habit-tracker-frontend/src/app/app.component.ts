import { Component, OnInit } from '@angular/core';
import { HabitService } from './services/habit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'habit-tracker-frontend';

  constructor(private _habitService: HabitService) { }

  ngOnInit(): void {
    this._habitService.fetchHabits().subscribe({error: err => alert(err.message)});
  }
}
