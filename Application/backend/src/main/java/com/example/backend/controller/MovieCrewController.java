package com.example.backend.controller;

import com.example.backend.dto.MovieCrewDTO;
import com.example.backend.service.interfaces.MovieCrewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/movie/crew", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class MovieCrewController {

    private final MovieCrewService movieCrewService;

    @GetMapping("/directors/{id}")
    public ResponseEntity<List<MovieCrewDTO>> getMovieDirectors(@PathVariable("id") Integer movieId){
        return new ResponseEntity<>(movieCrewService.getMovieDirectors(movieId), HttpStatus.OK);
    }

    @GetMapping("/writters/{id}")
    public ResponseEntity<List<MovieCrewDTO>> getMovieWritters(@PathVariable("id") Integer movieId){
        return new ResponseEntity<>(movieCrewService.getMovieWritters(movieId), HttpStatus.OK);
    }

}
