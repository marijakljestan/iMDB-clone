package com.example.backend.controller;

import com.example.backend.dto.MovieDTO;
import com.example.backend.service.interfaces.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/movie", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @GetMapping("")
    public Iterable<MovieDTO> getAll(){
        return movieService.getAllMovies();
    }

    @GetMapping("/{id}")
    public MovieDTO getMovieById(@PathVariable("id") Integer id){ return movieService.getMovieById(id); }

    @GetMapping("/watchlist/{id}")
    public Iterable<MovieDTO> getUserWatchlist(@PathVariable("id") Integer id){ return movieService.getUserWatchlist(); }

    @PostMapping("")
    public MovieDTO addMovie(@RequestBody MovieDTO movieDTO){ return movieService.addMovie(movieDTO); }

    @PutMapping("")
    public MovieDTO editMovie(@RequestBody MovieDTO movieDTO){ return movieService.editMovie(movieDTO); }

    @DeleteMapping("/{id}")
    public void  deleteMovie(@PathVariable("id") Integer id){ movieService.deleteMovie(id); }
}
