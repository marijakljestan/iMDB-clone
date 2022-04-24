package com.example.backend.service;

import com.example.backend.dto.MovieCrewDTO;
import com.example.backend.mapper.CollectionMapper;
import com.example.backend.model.CrewMember;
import com.example.backend.repository.MovieCrewRepository;
import com.example.backend.service.interfaces.MovieCrewService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MovieCrewServiceImpl implements MovieCrewService {

    private final MovieCrewRepository movieCrewRepository;

    @Override
    public List<MovieCrewDTO> getMovieDirectors(Integer movieId) {
        List<CrewMember> crew = movieCrewRepository.getMovieDirectors(movieId);
        return CollectionMapper.mapList(crew, MovieCrewDTO.class);
    }

    @Override
    public List<MovieCrewDTO> getMovieWritters(Integer movieId) {
        List<CrewMember> crew = movieCrewRepository.getMovieWritters(movieId);
        return CollectionMapper.mapList(crew, MovieCrewDTO.class);
    }
}
