package com.example.backend.service;

import com.example.backend.dto.MovieDTO;
import com.example.backend.dto.RegisteredUserDTO;
import com.example.backend.mapper.CollectionMapper;
import com.example.backend.model.Movie;
import com.example.backend.service.interfaces.MovieService;
import com.example.backend.service.interfaces.RegisteredUserService;
import com.example.backend.service.interfaces.WatchlistService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class WatchlistServiceImpl implements WatchlistService {

    private final ModelMapper modelMapper;
    private final MovieService movieService;
    private final RegisteredUserService userService;

    @Override
    public List<MovieDTO> getUsersWatchlist(String username) {
        List<Movie> watchlist = userService.fetchUserWithWatchlist(username).getWatchlist();
        return CollectionMapper.mapList(watchlist, MovieDTO.class);
    }

    @Override
    public RegisteredUserDTO addMovieToWatchlist(String username, MovieDTO movieDTO) {
        RegisteredUserDTO user = userService.fetchUserWithWatchlist(username);
        Movie movie = modelMapper.map(movieDTO, Movie.class);
        user.getWatchlist().add(movie);
        return userService.saveUser(user);
    }
}
