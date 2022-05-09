package com.example.backend.controller;

import com.example.backend.dto.CrewMemberDTO;
import com.example.backend.service.interfaces.CrewMemberService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/movie/crew", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class MovieCrewController {

    private final CrewMemberService movieCrewService;

    @GetMapping("/directors/{id}")
    public ResponseEntity<List<CrewMemberDTO>> getMovieDirectors(@PathVariable("id") Integer movieId){
        return new ResponseEntity<>(movieCrewService.getMovieDirectors(movieId), HttpStatus.OK);
    }

    @GetMapping("/writters/{id}")
    public ResponseEntity<List<CrewMemberDTO>> getMovieWritters(@PathVariable("id") Integer movieId){
        return new ResponseEntity<>(movieCrewService.getMovieWritters(movieId), HttpStatus.OK);
    }

    @GetMapping("/directors")
    public ResponseEntity<List<CrewMemberDTO>> getAllDirectors(){
        return new ResponseEntity<>(movieCrewService.getAllDirectors(), HttpStatus.OK);
    }

    @GetMapping("/writters")
    public ResponseEntity<List<CrewMemberDTO>> getMAllWritters(){
        return new ResponseEntity<>(movieCrewService.getAllWritters(), HttpStatus.OK);
    }

}
