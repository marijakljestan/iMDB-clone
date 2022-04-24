package com.example.backend.service.interfaces;

import com.example.backend.dto.MovieDTO;
import com.example.backend.dto.RegisteredUserDTO;

import java.util.List;

public interface WatchlistService {
    
    List<MovieDTO> getUsersWatchlist(String username);

    RegisteredUserDTO addMovieToWatchlist(String username, MovieDTO movie);

    RegisteredUserDTO deleteMovieFromWatchlist(String username, Integer movieId);
}
