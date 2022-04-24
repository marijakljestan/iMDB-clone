package com.example.backend.controller;

import com.example.backend.dto.ActorDTO;
import com.example.backend.service.interfaces.ActorService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/movie/actor", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ActorController {

    private final ActorService actorService;

    @GetMapping("/{id}")
    public ResponseEntity<Iterable<ActorDTO>> getAllActorsFromMovie(@PathVariable("id") Integer movieId){
        return new ResponseEntity<>(actorService.getActorsFromMovie(movieId), HttpStatus.OK);
    }
}
