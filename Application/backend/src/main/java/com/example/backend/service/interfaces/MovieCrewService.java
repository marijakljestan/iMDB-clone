package com.example.backend.service.interfaces;

import com.example.backend.dto.MovieCrewDTO;

import java.util.List;

public interface MovieCrewService {

    List<MovieCrewDTO> getMovieDirectors(Integer movieId);

    List<MovieCrewDTO> getMovieWritters(Integer movieId);

    List<MovieCrewDTO> getAllDirectors();

    List<MovieCrewDTO> getAllWritters();
}
