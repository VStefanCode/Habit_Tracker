import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitListComponent } from './components/habit-list/habit-list.component';
import { HabitEditComponent } from './components/habit-edit/habit-edit.component';
import { HabitAddComponent } from './components/habit-add/habit-add.component';
import { HabitTrackComponent } from './components/habit-track/habit-track.component';

const routes: Routes = [
  { path: 'habits/:id/track', component: HabitTrackComponent },
  { path: 'habits/:id/edit', component: HabitEditComponent },
  { path: 'habits/add', component: HabitAddComponent },
  { path: 'habits', component: HabitListComponent },
  { path: '',   redirectTo: '/habits', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
