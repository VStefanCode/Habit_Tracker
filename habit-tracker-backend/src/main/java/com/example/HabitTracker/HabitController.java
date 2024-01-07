package com.example.HabitTracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/habit")
@CrossOrigin(origins = "*")
public class HabitController {

    private final HabitService habitService;

    @Autowired
    public HabitController(HabitService habitService) {
        this.habitService = habitService;
    }

    @GetMapping
    public List<Habit> getHabit() {
        return habitService.getHabit();
    }

    @PostMapping
    public void registerNewHabit(@RequestBody Habit habit) {
        habitService.addNewHabit(habit);
    }

    @DeleteMapping(path = "{id}")
    public void deleteHabit(
            @PathVariable("id") Long id) {
        habitService.deleteHabit(id);
    }
    @PutMapping(path = "{id}")
    public void updateHabit(
            @PathVariable("id") Long id,
            @RequestBody Habit updatedHabit) {
        habitService.updateHabit(id, updatedHabit);
    }

    @PostMapping(path = "{id}/track")
    public void trackHabitProgress(@PathVariable("id") Long id, @RequestBody ProgressDto progressDto) {
        habitService.trackHabitProgress(id, progressDto.getTracking());
    }



}
