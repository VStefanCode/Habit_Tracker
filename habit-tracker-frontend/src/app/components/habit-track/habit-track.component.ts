import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Habit from 'src/app/model/habit';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-habit-track',
  templateUrl: './habit-track.component.html',
  styleUrls: ['./habit-track.component.css']
})
export class HabitTrackComponent {
  id: number = 0;

  habit: Habit = {name: '', description: '', tracking: 0, id: 0};

  tracking = new FormControl(0);

  constructor(private _habitService: HabitService, private _router: Router, private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    const habit = this._habitService.getHabit(this.id);
    this.habit = habit ?? {name: '', description: '', tracking: 0, id: 0};
    this.tracking.setValue(habit?.tracking ?? 0);
  }

  onSubmit() {
    const tracking = this.tracking.value;
    this._habitService.trackHabit(this.id, tracking!).subscribe({
      next: _ => this._router.navigate(['/habits']),
      error: err => alert(err.message)
    });
  }

  onCancel() {
    this._router.navigate(['/habits']);
  }
}
