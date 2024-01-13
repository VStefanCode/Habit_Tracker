import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import Habit from 'src/app/model/habit';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-habit-edit',
  templateUrl: './habit-edit.component.html',
  styleUrls: ['./habit-edit.component.css']
})
export class HabitEditComponent implements OnInit {

  habit: Habit = {id: 0, name: "", description: "", tracking: 0};

  constructor(private _habitService: HabitService, private _router: Router, private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params['id'];
    this.habit = this._habitService.getHabit(id) ?? {id: 0, name: "", description: "", tracking: 0};
  }

  onSubmit(editedHabit: {name: String, description: String}) {
    this._habitService.editHabit(this.habit.id, editedHabit.name, editedHabit.description).subscribe({
      next: _ => this._router.navigate(['/habits']),
      error: err => alert(err.message)
    });
  }

  onDelete() {
    this._habitService.deleteHabit(this.habit.id).subscribe({
      next: _ => this._router.navigate(['/habits']),
      error: err => alert(err.message)
    });
  }

  onCancel() {
    this._router.navigate(['/habits']);
  }

}
