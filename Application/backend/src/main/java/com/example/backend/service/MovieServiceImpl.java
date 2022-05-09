package com.example.backend.service;

import com.example.backend.dto.ActorDTO;
import com.example.backend.dto.AddMovieDTO;
import com.example.backend.dto.CrewMemberDTO;
import com.example.backend.dto.MovieDTO;
import com.example.backend.mapper.CollectionMapper;
import com.example.backend.model.*;
import com.example.backend.repository.MovieRepository;
import com.example.backend.service.interfaces.*;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MovieServiceImpl implements MovieService {

    private final CrewMemberService crewMemberService;
    private final MovieCrewService movieCrewService;
    private final MovieRoleService movieRoleService;
    private final ActorService actorService;
    private final MovieRepository movieRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<MovieDTO> getAllMovies() {
        List<Movie> movies = this.movieRepository.findAll();
        return CollectionMapper.mapList(movies, MovieDTO.class);
    }

    @Override
    public MovieDTO getMovieById(Integer id) {
        return modelMapper.map(this.movieRepository.findById(id).get(), MovieDTO.class);
    }

    @Override
    public int addMovie(AddMovieDTO movieDTO) {
        Movie newMovie = modelMapper.map(movieDTO, Movie.class);
        saveMovieCrew(movieDTO);
        Movie savedMovie = this.movieRepository.save(newMovie);
        return savedMovie.getId();
    }

    private void saveMovieCrew(AddMovieDTO movieDTO) {
        Movie newMovie = modelMapper.map(movieDTO, Movie.class);
        for(String director: movieDTO.getDirectors()) {
             CrewMember crewMember = this.crewMemberService.saveCrewMember(CrewMemberDTO.builder().name(director).role(CrewRole.director).build());
              this.movieCrewService.saveMovieCrew(MovieCrew.builder().movie(newMovie).crewMember(crewMember).crewMemberRole(CrewRole.director).build());
        }
        for(String writter: movieDTO.getWritters()) {
            CrewMember crewMember = this.crewMemberService.saveCrewMember(CrewMemberDTO.builder().name(writter).role(CrewRole.writter).build());
            this.movieCrewService.saveMovieCrew(MovieCrew.builder().movie(newMovie).crewMember(crewMember).crewMemberRole(CrewRole.writter).build());
        }
        for(ActorDTO actor: movieDTO.getActors()) {
            Actor savedActor = this.actorService.saveActor(ActorDTO.builder().name(actor.getName()).roleName(actor.getRoleName()).build());
            this.movieRoleService.saveRole(MovieRole.builder().roleName(actor.getRoleName()).movie(newMovie).actor(savedActor).build());
        }
    }

    @Override
    public MovieDTO editMovie(MovieDTO movieDTO) {
        Movie editedMovie = modelMapper.map(movieDTO, Movie.class);
        this.movieRepository.save(editedMovie);
        return movieDTO;
    }

    @Override
    public void deleteMovie(Integer id) {
        this.movieRepository.deleteById(id);
    }

    @Override
    public List<MovieDTO> getMoviesReviewedByUser(Integer userId) {
        List<Movie> movies = this.movieRepository.findMoviesReviewedByUser(userId);
        return CollectionMapper.mapList(movies, MovieDTO.class);
    }
}
