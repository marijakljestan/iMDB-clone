package com.example.backend.controller;

import com.example.backend.dto.ReviewDTO;
import com.example.backend.service.interfaces.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping(value = "/movie/review", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping("/{id}")
    public ResponseEntity<Iterable<ReviewDTO>> getMoviesReview(@PathVariable("id") Integer movieId){
        return new ResponseEntity<>(reviewService.getMoviesReview(movieId), HttpStatus.OK);
    }

    @PostMapping("/")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Iterable<ReviewDTO>> addReview(@RequestBody ReviewDTO review, Principal user){
        review.setUsername(user.getName());
        return new ResponseEntity<>(reviewService.addReview(review), HttpStatus.OK);
    }

}
