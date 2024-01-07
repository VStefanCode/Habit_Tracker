package com.example.HabitTracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class HabitService {

    private final HabitRepository habitRepository;

    @Autowired
    public HabitService(HabitRepository habitRepository) {
        this.habitRepository = habitRepository;
    }

    public List<Habit> getHabit() {
        return habitRepository.findAll();
    }

    public void addNewHabit(Habit habit) {
        Optional<Habit> habitOptional = habitRepository.
                findHabitByName(habit.getName());
        if (habitOptional.isPresent()){
            throw new IllegalStateException("Habit with that name exists");
        }
        habitRepository.save(habit);
    }

    public void deleteHabit(Long id) {
        if (!habitRepository.existsById(id)) {
            throw new IllegalStateException("Habit with id " + id + " does not exist");
        }
        habitRepository.deleteById(id);
    }


    public void updateHabit(Long id, Habit updatedHabit) {
        Habit habit = habitRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(
                        "Habit with id " + id + " does not exist"
                ));

        habit.setName(updatedHabit.getName());
        habit.setDescription(updatedHabit.getDescription());

        habitRepository.save(habit);
    }

    public void trackHabitProgress(Long id, int tracking) {
        Habit habit = habitRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Habit with id " + id + " does not exist"));

        habit.setTracking(tracking);
        habitRepository.save(habit);
    }

}
