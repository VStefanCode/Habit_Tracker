import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-habit-edit',
  templateUrl: './habit-edit.component.html',
  styleUrls: ['./habit-edit.component.css']
})
export class HabitEditComponent implements OnInit {

  id: number = 0;
  tracking: number = 0;

  editHabitForm = new FormGroup({
    name: new FormControl(new String('')),
    description: new FormControl(new String(''))
  });

  constructor(private _habitService: HabitService, private _router: Router, private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    const habit = this._habitService.getHabit(this.id);
    this.tracking = habit?.tracking!;
    this.editHabitForm.setValue({name: habit?.name ?? null, description: habit?.description ?? null});
  }

  onSubmit() {
    const habit = this.editHabitForm.value;
    this._habitService.editHabit(this.id, habit?.name ?? "", habit?.description ?? "").subscribe({
      next: _ => this._router.navigate(['/habits']),
      error: err => alert(err.message)
    });
  }

  onDelete() {
    this._habitService.deleteHabit(this.id).subscribe({
      next: _ => this._router.navigate(['/habits']),
      error: err => alert(err.message)
    });
  }

  onCancel() {
    this._router.navigate(['/habits']);
  }

}
