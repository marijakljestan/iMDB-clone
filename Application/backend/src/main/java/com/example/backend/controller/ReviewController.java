package com.example.backend.controller;

import com.example.backend.dto.ReviewDTO;
import com.example.backend.service.interfaces.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/movie/review", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping("/{id}")
    public ResponseEntity<Iterable<ReviewDTO>> getMoviesReview(@PathVariable("id") Integer movieId){
        return new ResponseEntity<>(reviewService.getMoviesReview(movieId), HttpStatus.OK);
    }

}
