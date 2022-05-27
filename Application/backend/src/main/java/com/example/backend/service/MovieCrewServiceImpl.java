package com.example.backend.service;

import com.example.backend.model.MovieCrew;
import com.example.backend.repository.MovieCrewRepository;
import com.example.backend.service.interfaces.MovieCrewService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MovieCrewServiceImpl implements MovieCrewService {

    private final MovieCrewRepository movieCrewRepository;

    @Override
    public MovieCrew saveMovieCrew(MovieCrew movieCrew) {
        return this.movieCrewRepository.save(movieCrew);
    }

    @Override
    public void deleteMovieCrew(Integer movieId){
        this.movieCrewRepository.deleteCrewFromMovie(movieId);
    }
}
