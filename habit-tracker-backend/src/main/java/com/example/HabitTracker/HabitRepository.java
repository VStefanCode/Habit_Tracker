package com.example.HabitTracker;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HabitRepository
        extends JpaRepository<Habit, Long> {

    @Query("SELECT s FROM Habit s WHERE s.name =?1")
    Optional<Habit> findHabitByName(String name);

    void deleteById(Long id);
}
