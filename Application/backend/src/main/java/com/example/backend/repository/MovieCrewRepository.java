package com.example.backend.repository;

import com.example.backend.model.MovieCrew;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieCrewRepository extends JpaRepository<MovieCrew, Integer> {
}
