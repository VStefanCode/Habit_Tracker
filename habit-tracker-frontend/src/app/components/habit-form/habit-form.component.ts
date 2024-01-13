import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Habit from 'src/app/model/habit';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.css']
})
export class HabitFormComponent implements OnInit {
  @Input()
  canDelete = false;

  @Input()
  habit: Habit = {id: 0, name: "", description: "", tracking: 0};

  @Output()
  submitCalled = new EventEmitter<{name: String, description: String}>();

  @Output()
  deleteCalled = new EventEmitter<void>();

  @Output()
  cancelCalled = new EventEmitter<void>();

  habitForm = new FormGroup({
    name: new FormControl(new String('')),
    description: new FormControl(new String(''))
  });

  ngOnInit(): void {
    this.habitForm.setValue({name: this.habit.name, description: this.habit.description});
  }

  onSubmit() {
    const habit = this.habitForm.value;
    this.submitCalled.emit({name: habit.name!, description: habit.description!});
  }

  onDelete() {
    this.deleteCalled.emit();
  }

  onCancel() {
    this.cancelCalled.emit();
  }
}
