import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-habit-add',
  templateUrl: './habit-add.component.html',
  styleUrls: ['./habit-add.component.css']
})
export class HabitAddComponent {

  addHabitForm = new FormGroup({
    name: new FormControl(new String('')),
    description: new FormControl(new String(''))
  });

  constructor(private _habitService: HabitService, private _router: Router) {}

  onSubmit() {
    const habit = this.addHabitForm.value;
    this._habitService.addHabit({id: 0, tracking: 0, name: habit.name!, description: habit.description!}).subscribe({
      next: _ => this._router.navigate(['/habits']),
      error: err => alert(err.message)
    });
  }

  onCancel() {
    this._router.navigate(['/habits']);
  }

}
