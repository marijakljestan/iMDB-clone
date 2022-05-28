package com.example.backend.service;

import com.example.backend.dto.*;
import com.example.backend.mapper.CollectionMapper;
import com.example.backend.model.*;
import com.example.backend.repository.MovieRepository;
import com.example.backend.service.interfaces.*;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class MovieServiceImpl implements MovieService {

    private final CrewMemberService crewMemberService;
    private final MovieCrewService movieCrewService;
    private final MovieRoleService movieRoleService;
    private final ActorService actorService;
    private final S3Services s3Services;
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
    public List<MovieDTO> getMoviesWithSameGenre(Integer id) {
        List<MovieDTO> moviesWithSameGenre = new ArrayList<>();
        Set<Genre> filter = getMovieById(id).getGenres();
        for (MovieDTO movie : getAllMovies())
            for (Genre genre : movie.getGenres())
                if (filter.contains(genre) && movie.getId() != id) {
                    moviesWithSameGenre.add(movie);
                    break;
                }

        return moviesWithSameGenre;
    }

    @Override
    public int addMovie(AddMovieDTO movieDTO) {
        Movie newMovie = modelMapper.map(movieDTO, Movie.class);
        newMovie.setCoverImage(s3Services.saveFileToS3("posters/" + movieDTO.getName().replaceAll("\\s+","-")+".jpg", movieDTO.getCoverImage()));
        newMovie.setImages(new HashSet<>());
        int i = 1;
        for(String image: movieDTO.getImages()) {
            Set<String> images = newMovie.getImages();
            images.add(s3Services.saveFileToS3(movieDTO.getName().replaceAll("\\s+","-") + "/" + movieDTO.getName().replaceAll("\\s+","-") + i + ".jpg", image));
            newMovie.setImages(images);
            ++i;
        }
        Movie savedMovie = this.movieRepository.save(newMovie);
        movieDTO.setId(savedMovie.getId());
        saveMovieCrew(movieDTO);
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
    public EditMovieDTO editMovie(EditMovieDTO movieDTO) {
        Movie editedMovie = modelMapper.map(movieDTO, Movie.class);
        this.movieRepository.save(editedMovie);
       // editMovieCrew(movieDTO);
        return movieDTO;
    }

    private void editMovieCrew(EditMovieDTO movieDTO) {
        Movie newMovie = modelMapper.map(movieDTO, Movie.class);
        this.movieCrewService.deleteMovieCrew(newMovie.getId());
        for(CrewMember director: movieDTO.getDirectors()) {
            CrewMember crewMember = this.crewMemberService.saveCrewMember(CrewMemberDTO.builder().name(director.getName()).role(CrewRole.director).build());
            this.movieCrewService.saveMovieCrew(MovieCrew.builder().movie(newMovie).crewMember(director).crewMemberRole(CrewRole.director).build());
        }
        for(CrewMember writter: movieDTO.getWritters()) {
            CrewMember crewMember = this.crewMemberService.saveCrewMember(CrewMemberDTO.builder().name(writter.getName()).role(CrewRole.writter).build());
            this.movieCrewService.saveMovieCrew(MovieCrew.builder().movie(newMovie).crewMember(writter).crewMemberRole(CrewRole.writter).build());
        }
        for(ActorDTO actor: movieDTO.getActors()) {
            Actor savedActor = this.actorService.saveActor(ActorDTO.builder().name(actor.getName()).roleName(actor.getRoleName()).build());
            this.movieRoleService.saveRole(MovieRole.builder().roleName(actor.getRoleName()).movie(newMovie).actor(savedActor).build());
        }
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
