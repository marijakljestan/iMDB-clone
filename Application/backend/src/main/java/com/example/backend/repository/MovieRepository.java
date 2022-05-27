package com.example.backend.repository;

import com.example.backend.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.*;

public interface MovieRepository extends JpaRepository<Movie, Integer> {

    @Query(value = "select m from Movie m where m.id in " +
                   "(select r.movie.id from Review  r where r.registeredUser.id = ?1)")
    List<Movie> findMoviesReviewedByUser(Integer userId);
}
