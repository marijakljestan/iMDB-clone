package com.example.backend.service.interfaces;

import com.example.backend.dto.ActorDTO;
import com.example.backend.model.Actor;

import java.util.List;

public interface ActorService {

    List<ActorDTO> getActorsFromMovie(Integer movieId);

    List<ActorDTO> getAllActors();

    Actor saveActor(ActorDTO actorDTO);
}
