package com.example.backend.repository;

import com.example.backend.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Integer> {

   /* @Query("SELECT distinct m FROM Movie m LEFT JOIN FETCH m.images")
    List<Movie> findAll();*/
}
