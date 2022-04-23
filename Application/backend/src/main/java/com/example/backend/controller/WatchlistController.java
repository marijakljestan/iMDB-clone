package com.example.backend.controller;

import com.example.backend.dto.MovieDTO;
import com.example.backend.dto.RegisteredUserDTO;
import com.example.backend.service.interfaces.WatchlistService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/watchlist", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class WatchlistController {

    private final WatchlistService watchlistService;

    @GetMapping("/watchlist/{id}")
    public Iterable<MovieDTO> getUserWatchlist(@PathVariable("id") Integer id){ return watchlistService.getWatchlistByUserId(id); }

    @PostMapping("/watchlist/{id}")
    public ResponseEntity<RegisteredUserDTO> addMovieToWatchlist(@PathVariable("id") Integer userId, @RequestBody MovieDTO movie){
        RegisteredUserDTO user = watchlistService.addMovieToWatchlist(userId, movie);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
