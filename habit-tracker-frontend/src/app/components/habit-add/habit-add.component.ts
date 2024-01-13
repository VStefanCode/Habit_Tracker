import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-habit-add',
  templateUrl: './habit-add.component.html',
  styleUrls: ['./habit-add.component.css']
})
export class HabitAddComponent {

  constructor(private _habitService: HabitService, private _router: Router) {}

  onSubmit(addedHabit: {name: String, description: String}) {
    this._habitService.addHabit({id: 0, tracking: 0, name: addedHabit.name, description: addedHabit.description}).subscribe({
      next: _ => this._router.navigate(['/habits']),
      error: err => alert(err.message)
    });
  }

  onCancel() {
    this._router.navigate(['/habits']);
  }

}
