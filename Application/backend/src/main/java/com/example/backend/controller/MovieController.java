package com.example.backend.controller;

import com.example.backend.service.interfaces.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/movie", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class MovieController {

    private final MovieService movieService;
}
