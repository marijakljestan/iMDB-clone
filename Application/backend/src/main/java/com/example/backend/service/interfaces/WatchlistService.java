package com.example.backend.service.interfaces;

import com.example.backend.dto.MovieDTO;
import java.util.List;

public interface WatchlistService {
    
    List<MovieDTO> getWatchlistByUserId(Integer userId);

    MovieDTO addMovieToWatchlist(Integer userId, MovieDTO movie);
}
