package com.example.backend.repository;

import com.example.backend.dto.ActorDTO;
import com.example.backend.model.Actor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.*;

public interface ActorRepository extends JpaRepository<Actor, Integer> {

    @Query(value="select distinct new com.example.backend.dto.ActorDTO(a.id, a.name,  a.image, mr.roleName) " +
                  "from Actor a  left join MovieRole mr on a.id = mr.actor.id where mr.movie.id = ?1")
    List<ActorDTO> getActorsByMovieId(Integer movieId);
}
