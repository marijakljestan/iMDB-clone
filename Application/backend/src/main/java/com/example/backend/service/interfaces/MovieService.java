package com.example.backend.service.interfaces;

import com.example.backend.dto.AddMovieDTO;
import com.example.backend.dto.MovieDTO;

import java.io.IOException;
import java.util.List;

public interface MovieService {

    List<MovieDTO> getAllMovies();

    MovieDTO getMovieById(Integer id);

    List<MovieDTO> getMoviesWithSameGenre(Integer id);

    int addMovie(AddMovieDTO movieDTO) throws IOException;

    AddMovieDTO editMovie(AddMovieDTO movieDTO);

    void deleteMovie(Integer id);

    List<MovieDTO> getMoviesReviewedByUser(Integer userId);
}
