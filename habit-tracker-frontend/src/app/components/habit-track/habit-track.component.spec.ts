import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitTrackComponent } from './habit-track.component';

describe('HabitTrackComponent', () => {
  let component: HabitTrackComponent;
  let fixture: ComponentFixture<HabitTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
