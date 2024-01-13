import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitListComponent } from './components/habit-list/habit-list.component';
import { HabitEditComponent } from './components/habit-edit/habit-edit.component';
import { HabitAddComponent } from './components/habit-add/habit-add.component';
import { HabitTrackComponent } from './components/habit-track/habit-track.component';
import { HabitComponent } from './components/habit/habit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitEditComponent,
    HabitAddComponent,
    HabitTrackComponent,
    HabitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
