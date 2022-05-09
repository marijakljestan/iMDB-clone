package com.example.backend.service;

import com.example.backend.dto.ActorDTO;
import com.example.backend.mapper.CollectionMapper;
import com.example.backend.model.Actor;
import com.example.backend.model.CrewMember;
import com.example.backend.repository.ActorRepository;
import com.example.backend.service.interfaces.ActorService;
import com.example.backend.service.interfaces.MovieRoleService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ActorServiceImpl implements ActorService {

    private final ActorRepository actorRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<ActorDTO> getActorsFromMovie(Integer movieId) {
        return this.actorRepository.getActorsByMovieId(movieId);
    }

    @Override
    public List<ActorDTO> getAllActors() {
        List<Actor> actors = this.actorRepository.findAll();
        return CollectionMapper.mapList(actors, ActorDTO.class);
    }

    @Override
    public Actor saveActor(ActorDTO actorDTO) {
        Actor newActor = modelMapper.map(actorDTO, Actor.class);
        for (Actor actor : this.actorRepository.findAll())
            if (actor.getName().equals(actorDTO.getName()))
                return actor;

        return this.actorRepository.save(newActor);
    }
}
