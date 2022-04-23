package com.example.backend.service.interfaces;

import com.example.backend.dto.MovieDTO;
import com.example.backend.dto.RegisteredUserDTO;

import java.util.List;

public interface WatchlistService {
    
    List<MovieDTO> getWatchlistByUserId(Integer userId);

    RegisteredUserDTO addMovieToWatchlist(Integer userId, MovieDTO movie);
}
