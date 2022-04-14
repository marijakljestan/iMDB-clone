package com.example.backend.service;

import com.example.backend.dto.MovieDTO;
import com.example.backend.mapper.CollectionMapper;
import com.example.backend.model.Movie;
import com.example.backend.repository.MovieRepository;
import com.example.backend.service.interfaces.MovieService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<MovieDTO> getAllMovies() {
        return CollectionMapper.mapList(this.movieRepository.findAll(), MovieDTO.class);
    }

    @Override
    public MovieDTO getMovieById(Integer id) {
        return modelMapper.map(movieRepository.findById(id).get(), MovieDTO.class);
    }

    @Override
    public MovieDTO addMovie(MovieDTO movieDTO) {
        Movie newMovie = modelMapper.map(movieDTO, Movie.class);
        movieRepository.save(newMovie);
        return movieDTO;
    }

    @Override
    public MovieDTO editMovie(MovieDTO movieDTO) {
        Movie editedMovie = modelMapper.map(movieDTO, Movie.class);
        movieRepository.save(editedMovie);
        return movieDTO;
    }

    @Override
    public void deleteMovie(Integer id) {
        movieRepository.deleteById(id);
    }
}
