package com.example.backend.service.interfaces;

import com.example.backend.dto.ActorDTO;

import java.util.List;

public interface ActorService {
    List<ActorDTO> getActorsFromMovie(Integer movieId);
}
