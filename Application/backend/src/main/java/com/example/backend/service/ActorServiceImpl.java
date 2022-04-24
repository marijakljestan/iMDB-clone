package com.example.backend.service;

import com.example.backend.dto.ActorDTO;
import com.example.backend.mapper.CollectionMapper;
import com.example.backend.model.Actor;
import com.example.backend.repository.ActorRepository;
import com.example.backend.service.interfaces.ActorService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ActorServiceImpl implements ActorService {

    private final ActorRepository actorRepository;

    @Override
    public List<ActorDTO> getActorsFromMovie(Integer movieId) {
        return actorRepository.getActorsByMovieId(movieId);
    }
}
