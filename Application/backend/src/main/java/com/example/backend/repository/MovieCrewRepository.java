package com.example.backend.repository;

import com.example.backend.model.MovieCrew;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MovieCrewRepository extends JpaRepository<MovieCrew, Integer> {

    @Query(value = "delete from MovieCrew  mc where mc.movie.id = ?1")
    void deleteCrewFromMovie(Integer movieId);
}
