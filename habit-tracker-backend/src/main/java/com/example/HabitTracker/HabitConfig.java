package com.example.HabitTracker;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class HabitConfig {

    @Bean
    CommandLineRunner commandLineRunner(
            HabitRepository repository){
        return args -> {
            Habit habit1 = new Habit(
                    "Exercise",
                    "Go for a 30-minute jog in the morning."
            );

            Habit habit2 = new Habit(
                    "Reading",
                    "Read a book for 20 minutes before bedtime."
            );

            repository.saveAll(
                    List.of(habit1, habit2)
            );
        };
    }
}
