package com.example.backend.controller;

import com.example.backend.dto.MovieDTO;
import com.example.backend.service.interfaces.WatchlistService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/watchlist", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class WatchlistController {

    private final WatchlistService watchlistService;

    @GetMapping("/watchlist/{id}")
    public Iterable<MovieDTO> getUserWatchlist(@PathVariable("id") Integer id){ return watchlistService.getWatchlistByUserId(id); }

    @PostMapping("/watchlist/{id}")
    public MovieDTO addMovieToWatchlist(@PathVariable("id") Integer userId, @RequestBody MovieDTO movie){
        return watchlistService.addMovieToWatchlist(userId, movie);
    }

}
