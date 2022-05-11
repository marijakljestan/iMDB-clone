package com.example.backend.service.interfaces;

import com.example.backend.dto.AddMovieDTO;
import com.example.backend.dto.MovieDTO;
import java.util.List;

public interface MovieService {

    List<MovieDTO> getAllMovies();

    MovieDTO getMovieById(Integer id);

    int addMovie(AddMovieDTO movieDTO);

    MovieDTO editMovie(MovieDTO movieDTO);

    void deleteMovie(Integer id);

    List<MovieDTO> getMoviesReviewedByUser(Integer userId);
}
