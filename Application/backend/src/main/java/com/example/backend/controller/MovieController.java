package com.example.backend.controller;

import com.example.backend.dto.AddMovieDTO;
import com.example.backend.dto.EditMovieDTO;
import com.example.backend.dto.MovieDTO;
import com.example.backend.service.interfaces.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping(value = "/movie", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @GetMapping("/")
    public ResponseEntity<Iterable<MovieDTO>> getAll(){
        return new ResponseEntity<>(movieService.getAllMovies(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MovieDTO> getMovieById(@PathVariable("id") Integer id){
        return new ResponseEntity<>(movieService.getMovieById(id), HttpStatus.OK);
    }

    @GetMapping("/reviewed-by-user/{id}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Iterable<MovieDTO>> getMoviesReviewedByUser(@PathVariable("id") Integer userId){
        return new ResponseEntity<>(movieService.getMoviesReviewedByUser(userId), HttpStatus.OK);
    }

    @GetMapping("/genre/{id}")
    public ResponseEntity<Iterable<MovieDTO>> getMoviesBySameGenre(@PathVariable("id") Integer movieId){
        return new ResponseEntity<>(movieService.getMoviesWithSameGenre(movieId), HttpStatus.OK);
    }

    @PostMapping("/")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Integer> addMovie(@RequestBody AddMovieDTO movieDTO) throws IOException {
        return new ResponseEntity<>(movieService.addMovie(movieDTO), HttpStatus.CREATED);
    }

    @PutMapping("/")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<EditMovieDTO> editMovie(@RequestBody EditMovieDTO movieDTO){
        return new ResponseEntity<>(movieService.editMovie(movieDTO), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> deleteMovie(@PathVariable("id") Integer id){
        movieService.deleteMovie(id);
        return new ResponseEntity<>("Movie deleted!", HttpStatus.OK);
    }
}
