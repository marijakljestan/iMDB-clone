package com.example.backend.controller;

import com.example.backend.dto.MovieDTO;
import com.example.backend.dto.RegisteredUserDTO;
import com.example.backend.service.interfaces.WatchlistService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping(value = "/watchlist", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class WatchlistController {

    private final WatchlistService watchlistService;

    @GetMapping("/")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Iterable<MovieDTO>> getUserWatchlist(Principal principal){
        return new ResponseEntity<>(watchlistService.getUsersWatchlist(principal.getName()), HttpStatus.OK);
    }

    @PostMapping("/")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<RegisteredUserDTO> addMovieToWatchlist(Principal principal, @RequestBody MovieDTO movie){
        RegisteredUserDTO user = watchlistService.addMovieToWatchlist(principal.getName(), movie);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<RegisteredUserDTO> removeMovieFromWatchlist(Principal principal, @PathVariable("id") Integer movieId){
        RegisteredUserDTO user = watchlistService.deleteMovieFromWatchlist(principal.getName(), movieId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
